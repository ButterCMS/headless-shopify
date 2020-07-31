const { GraphQLClient } = require("graphql-request");
var Multipassify = require("multipassify");

class ShopifyService {
  constructor() {
    const endpoint = `${process.env.SHOP_URL}/api/graphql.json`;

    this.graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        "X-Shopify-Storefront-Access-Token": process.env.APP_TOKEN,
      },
    });
  }

  async getProductPriceRange(productHandle) {
    const query = `{
      productByHandle(handle: "${productHandle}") {
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
          maxVariantPrice {
            amount
            currencyCode
          }
        }
      }
    }`;
    const response = await this.graphQLClient.request(query);
    if (response.errors) {
      throw response.error;
    }
    return response.productByHandle.priceRange;
  }

  createMultipass(customerData) {
    const multipassify = new Multipassify(process.env.MULTIPASS_SECRET);

    console.log({ secret: process.env.MULTIPASS_SECRET }, customerData);
    const domain = process.env.SHOP_URL.match(/http(s?):\/\/(.*)\//)[2];
    // Generate a Shopify multipass URL to your shop
    const url = multipassify.generateUrl(customerData, domain);
    const token = multipassify.encode(customerData);
    console.log("generated url", url);
    return { url, token };
  }
}

module.exports = { ShopifyService };
