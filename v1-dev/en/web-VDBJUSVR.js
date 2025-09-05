import {
  WebPlugin
} from "./chunk-TX3CGN55.js";

// node_modules/@capgo/capacitor-native-biometric/dist/esm/web.js
var NativeBiometricWeb = class extends WebPlugin {
  constructor() {
    super();
  }
  isAvailable() {
    throw new Error("Method not implemented.");
  }
  verifyIdentity(_options) {
    console.log("verifyIdentity", _options);
    throw new Error("Method not implemented.");
  }
  getCredentials(_options) {
    console.log("getCredentials", _options);
    throw new Error("Method not implemented.");
  }
  setCredentials(_options) {
    console.log("setCredentials", _options);
    throw new Error("Method not implemented.");
  }
  deleteCredentials(_options) {
    console.log("deleteCredentials", _options);
    throw new Error("Method not implemented.");
  }
};
export {
  NativeBiometricWeb
};
/**i18n:dbcdba66f79c3e508aa30433b9167553611c4c643335d41cfdb2692d08be0e91*/
//# sourceMappingURL=web-VDBJUSVR.js.map
