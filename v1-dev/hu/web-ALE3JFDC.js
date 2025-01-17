import {
  WebPlugin,
  __async
} from "./chunk-V6RV3DVJ.js";

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
/**i18n:0a0d52da4547ed5e627dafd1cee6f3a90eb892d0a65f1beab4f7eba72c0842b8*/
//# sourceMappingURL=web-ALE3JFDC.js.map
