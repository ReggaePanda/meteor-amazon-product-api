var amazon = Npm.require("amazon-product-api");
AmazonProductApi = {};

AmazonProductApi.createClient = function (credentials) {
    var client = amazon.createClient(credentials);
    client.itemSearchSync = Meteor.wrapAsync(client.itemSearch, client);
    client.itemLookupSync = Meteor.wrapAsync(client.itemLookup, client);
    client.browseNodeSync = Meteor.wrapAsync(client.browseNode, client);
    return client;
};