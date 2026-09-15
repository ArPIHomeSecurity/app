import {
  WebPlugin,
  __async
} from "./chunk-44OZZPBE.js";

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
      return { url: "" };
    });
  }
  getState() {
    return __async(this, null, function* () {
      return { isActive: document.hidden !== true };
    });
  }
  minimizeApp() {
    return __async(this, null, function* () {
      throw this.unimplemented("Not implemented on web.");
    });
  }
  toggleBackButtonHandler() {
    return __async(this, null, function* () {
      throw this.unimplemented("Not implemented on web.");
    });
  }
  getAppLanguage() {
    return __async(this, null, function* () {
      return {
        value: navigator.language.split("-")[0].toLowerCase()
      };
    });
  }
};
export {
  AppWeb
};
/**i18n:1ccbc765124d633963bc149d2ba93ff8eef0930da8305167c0f55657e126862c*/
//# sourceMappingURL=web-WIDHD4L5.js.map
