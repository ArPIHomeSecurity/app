import {
  WebPlugin,
  __async
} from "./chunk-Q45EIQLZ.js";

// node_modules/@capacitor/dialog/dist/esm/web.js
var DialogWeb = class extends WebPlugin {
  alert(options) {
    return __async(this, null, function* () {
      window.alert(options.message);
    });
  }
  prompt(options) {
    return __async(this, null, function* () {
      const val = window.prompt(options.message, options.inputText || "");
      return {
        value: val !== null ? val : "",
        cancelled: val === null
      };
    });
  }
  confirm(options) {
    return __async(this, null, function* () {
      const val = window.confirm(options.message);
      return {
        value: val
      };
    });
  }
};
export {
  DialogWeb
};
/**i18n:a926a8319c9492ebaabf92a7e4a0931f259389354041e97f5ec61846cb4eb1b1*/
//# sourceMappingURL=web-6XMPB2EZ.js.map
