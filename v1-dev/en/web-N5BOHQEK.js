import {
  WebPlugin,
  __async
} from "./chunk-QQYVD347.js";

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
/**i18n:a4dc3ee044be6974171d7d3bda47eb536e81b2f619ff2c319da4ccaa591162d5*/
//# sourceMappingURL=web-N5BOHQEK.js.map
