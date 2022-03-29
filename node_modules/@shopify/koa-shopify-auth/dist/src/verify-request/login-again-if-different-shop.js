"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginAgainIfDifferentShop = void 0;
var tslib_1 = require("tslib");
var shopify_api_1 = tslib_1.__importDefault(require("@shopify/shopify-api"));
var utilities_1 = require("./utilities");
var auth_1 = require("../auth");
function loginAgainIfDifferentShop(routes, accessMode) {
    if (accessMode === void 0) { accessMode = auth_1.DEFAULT_ACCESS_MODE; }
    return function loginAgainIfDifferentShopMiddleware(ctx, next) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var query, session;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = ctx.query;
                        return [4 /*yield*/, shopify_api_1.default.Utils.loadCurrentSession(ctx.req, ctx.res, accessMode === 'online')];
                    case 1:
                        session = _a.sent();
                        if (!(session && query.shop && session.shop !== query.shop)) return [3 /*break*/, 3];
                        return [4 /*yield*/, utilities_1.clearSession(ctx, accessMode)];
                    case 2:
                        _a.sent();
                        utilities_1.redirectToAuth(routes, ctx);
                        return [2 /*return*/];
                    case 3: return [4 /*yield*/, next()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
}
exports.loginAgainIfDifferentShop = loginAgainIfDifferentShop;
