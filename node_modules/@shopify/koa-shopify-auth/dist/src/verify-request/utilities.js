"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearSession = exports.redirectToAuth = void 0;
var tslib_1 = require("tslib");
var shopify_api_1 = tslib_1.__importDefault(require("@shopify/shopify-api"));
var auth_1 = require("../auth");
function redirectToAuth(_a, ctx) {
    var fallbackRoute = _a.fallbackRoute, authRoute = _a.authRoute;
    var shop = ctx.query.shop;
    var routeForRedirect = shop == null ? fallbackRoute : authRoute + "?shop=" + shop;
    ctx.redirect(routeForRedirect);
}
exports.redirectToAuth = redirectToAuth;
function clearSession(ctx, accessMode) {
    if (accessMode === void 0) { accessMode = auth_1.DEFAULT_ACCESS_MODE; }
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var error_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, shopify_api_1.default.Utils.deleteCurrentSession(ctx.req, ctx.res, accessMode === 'online')];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    if (error_1 instanceof shopify_api_1.default.Errors.SessionNotFound) {
                        // We can just move on if no sessions were cleared
                    }
                    else {
                        throw error_1;
                    }
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.clearSession = clearSession;
