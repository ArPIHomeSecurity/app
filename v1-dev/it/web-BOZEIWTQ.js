import {
  WebPlugin,
  __async
} from "./chunk-4MHAWVO3.js";

// node_modules/@capacitor/app/dist/esm/web.js
var AppWeb = class extends WebPlugin {
  constructor() {
    super();
    this.handleVisibilityChange = () => {
      const data = {
        isActive: document.hidden !== true
      };
      this.notifyListeners("appStateChange", data);
      if (document.hidden) {
        this.notifyListeners("pause", null);
      } else {
        this.notifyListeners("resume", null);
      }
    };
    document.addEventListener("visibilitychange", this.handleVisibilityChange, false);
  }
  exitApp() {
    throw this.unimplemented("Not implemented on web.");
  }
  getInfo() {
    return __async(this, null, function* () {
      throw this.unimplemented("Not implemented on web.");
    });
  }
  getLaunchUrl() {
    return __async(this, null, function* () {
      return {
        url: ""
      };
    });
  }
  getState() {
    return __async(this, null, function* () {
      return {
        isActive: document.hidden !== true
      };
    });
  }
  minimizeApp() {
    return __async(this, null, function* () {
      throw this.unimplemented("Not implemented on web.");
    });
  }
};
export {
  AppWeb
};
/**i18n:0c55d6dd7ccd1cb9f07652b9b6bac1d8ca7a4fc13b350c57d019930d0619e49b*/
//# sourceMappingURL=web-BOZEIWTQ.js.map
