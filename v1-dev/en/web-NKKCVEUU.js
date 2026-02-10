import {
  WebPlugin,
  __async
} from "./chunk-PGUNEYGJ.js";

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
/**i18n:5a2c3827deb5207c9b2cd52e3c980a766623046180337536c8d49c0b2e22128f*/
//# sourceMappingURL=web-NKKCVEUU.js.map
