require("dotenv").config();

const express = require("express");
const serverless = require("serverless-http");
const bodyParser = require("body-parser");
const hmacValidity = require("shopify-hmac-validation");
const prerender = require("prerender-node").set(
  "prerenderToken",
  process.env.PRERENDER_TOKEN
);

const { ButterCMSService } = require("./butter-cms-service");
const { ShopifyService } = require("./shopify-service");

const app = express();
const apiRoute = "/.netlify/functions/server";
const butterCMSService = new ButterCMSService();
const shopifyService = new ShopifyService();

prerender.crawlerUserAgents.push("googlebot");
prerender.crawlerUserAgents.push("bingbot");
prerender.crawlerUserAgents.push("yandex");
app.use(prerender);

function rawBodySaver(req, res, buf, encoding) {
  if (buf && buf.length) {
    req.rawBody = buf.toString(encoding || "utf8");
  }
}

function verifyWebhookRequest(req, res, next) {
  try {
    if (
      !hmacValidity.checkWebhookHmacValidity(
        process.env.WEBHOOK_SECRET,
        req.rawBody,
        req.headers["x-shopify-hmac-sha256"]
      )
    ) {
      throw Error("Unauthorized request");
    }
    return next();
  } catch (e) {
    console.log(e);
    return res.status(401).json({ message: "Unauthorized request" });
  }
}

app.use(
  `${apiRoute}/webhooks/product-update`,
  bodyParser.json({ verify: rawBodySaver })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router();

router.post(
  "/webhooks/product-update",
  verifyWebhookRequest,
  async (req, res) => {
    try {
      const priceRange = await shopifyService.getProductPriceRange(
        req.body.handle
      );
      const price = `${
        priceRange.minVariantPrice.amount != priceRange.maxVariantPrice.amount
          ? "from "
          : ""
      } ${priceRange.minVariantPrice.amount} ${
        priceRange.minVariantPrice.currencyCode
      }`;
      await butterCMSService.addItemToCollection(
        process.env.PRODUCTS_COLLECTION_NAME,
        {
          title: req.body.title,
          image: req.body.image ? req.body.image.src : "",
          description: req.body.body_html,
          image_alt: req.body.title,
          price,
        }
      );
      return res
        .status(200)
        .json({ message: "Product has been added to collection" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Server error" });
    }
  }
);

router.post("/create-multipass", (req, res) => {
  const { email } = req.body.user;
  console.log("send", shopifyService.createMultipass({ email }));
  res
    .status(200)
    .json({ url: shopifyService.createMultipass({ email }).toString() });
});

app.use(apiRoute, router);

module.exports = app;
module.exports.handler = serverless(app);
