"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fs_1 = tslib_1.__importDefault(require("fs"));
var path_1 = tslib_1.__importDefault(require("path"));
var APP_BRIDGE_SCRIPT = fs_1.default.readFileSync(path_1.default.resolve(__dirname + "/../app-bridge-2.0.12.js"));
function redirectionScript(_a) {
    var origin = _a.origin, redirectTo = _a.redirectTo, apiKey = _a.apiKey, host = _a.host;
    return "\n    <script>" + APP_BRIDGE_SCRIPT + "</script>\n    <script type=\"text/javascript\">\n      document.addEventListener('DOMContentLoaded', function() {\n        if (window.top === window.self) {\n          // If the current window is the 'parent', change the URL by setting location.href\n          window.location.href = \"" + redirectTo + "\";\n        } else {\n          // If the current window is the 'child', change the parent's URL with postMessage\n          var AppBridge = window['app-bridge'];\n          var createApp = AppBridge.default;\n          var Redirect = AppBridge.actions.Redirect;\n          var app = createApp({\n            apiKey: \"" + apiKey + "\",\n            host: \"" + host + "\",\n            shopOrigin: \"" + encodeURI(origin) + "\",\n          });\n          var redirect = Redirect.create(app);\n          redirect.dispatch(Redirect.Action.REMOTE, \"" + redirectTo + "\");\n        }\n      });\n    </script>\n  ";
}
exports.default = redirectionScript;
