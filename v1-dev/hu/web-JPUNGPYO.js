import {
  WebPlugin,
  __async
} from "./chunk-MRV67ZGG.js";

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
/**i18n:3d6feb063b7dbaafdd1f1ad806656cc17454a1a9d8fab8300327a04420c51351*/
//# sourceMappingURL=web-JPUNGPYO.js.map
