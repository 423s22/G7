"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var querystring_1 = tslib_1.__importDefault(require("querystring"));
var redirection_page_1 = tslib_1.__importDefault(require("./redirection-page"));
function createTopLevelRedirect(apiKey, path) {
    return function topLevelRedirect(ctx) {
        var query = ctx.query;
        var shop = query.shop, host = query.host;
        var params = { shop: shop };
        var queryString = querystring_1.default.stringify(params);
        ctx.body = redirection_page_1.default({
            origin: shop,
            redirectTo: "https://" + ctx.host + path + "?" + queryString,
            apiKey: apiKey,
            host: host,
        });
    };
}
exports.default = createTopLevelRedirect;
