import {
  WebPlugin,
  __async
} from "./chunk-4MHAWVO3.js";

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
/**i18n:0c55d6dd7ccd1cb9f07652b9b6bac1d8ca7a4fc13b350c57d019930d0619e49b*/
//# sourceMappingURL=web-7DKKVVTK.js.map
