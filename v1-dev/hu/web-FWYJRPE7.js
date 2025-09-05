import {
  WebPlugin,
  __async
} from "./chunk-TX3CGN55.js";

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
/**i18n:dbcdba66f79c3e508aa30433b9167553611c4c643335d41cfdb2692d08be0e91*/
//# sourceMappingURL=web-FWYJRPE7.js.map
