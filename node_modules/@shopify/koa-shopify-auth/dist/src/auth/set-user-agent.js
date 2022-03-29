"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KOA_USER_AGENT_PREFIX = void 0;
var tslib_1 = require("tslib");
var shopify_api_1 = tslib_1.__importDefault(require("@shopify/shopify-api"));
exports.KOA_USER_AGENT_PREFIX = 'Koa Shopify Auth';
function setUserAgent() {
    if (!shopify_api_1.default.Context.USER_AGENT_PREFIX) {
        shopify_api_1.default.Context.USER_AGENT_PREFIX = exports.KOA_USER_AGENT_PREFIX;
    }
    else if (!shopify_api_1.default.Context.USER_AGENT_PREFIX.includes(exports.KOA_USER_AGENT_PREFIX)) {
        shopify_api_1.default.Context.USER_AGENT_PREFIX = shopify_api_1.default.Context.USER_AGENT_PREFIX + " | " + exports.KOA_USER_AGENT_PREFIX;
    }
}
exports.default = setUserAgent;
