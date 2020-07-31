const requestPromise = require("request-promise");

class ButterCMSService {
  async addItemToCollection(collectionName, item) {
    const writeToken = process.env.BUTTER_CMS_TOKEN;
    if (!writeToken) {
      return Promise.reject(Error("No write-enabled token configured"));
    }
    const body = {
      key: collectionName,
      status: "published",
      fields: [
        {
          en: item,
        },
      ],
    };
    const options = {
      method: "POST",
      uri: "https://api.buttercms.com/v2/content/",
      body,
      json: true,
      headers: {
        authorization: `Token ${writeToken}`,
      },
    };
    return requestPromise(options);
  }
}

module.exports = { ButterCMSService };
