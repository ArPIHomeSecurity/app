import {
  AuthenticationStrength,
  BiometryType
} from "./chunk-M3V4MLVE.js";
import {
  WebPlugin,
  __async
} from "./chunk-QFL7DFRO.js";

// node_modules/@capgo/capacitor-native-biometric/dist/esm/web.js
var NativeBiometricWeb = class extends WebPlugin {
  constructor() {
    super();
  }
  isAvailable() {
    return Promise.resolve({
      isAvailable: false,
      authenticationStrength: AuthenticationStrength.NONE,
      biometryType: BiometryType.NONE,
      deviceIsSecure: false,
      strongBiometryIsAvailable: false
    });
  }
  addListener(_eventName, _listener) {
    return __async(this, null, function* () {
      return {
        remove: () => __async(null, null, function* () {
        })
      };
    });
  }
  verifyIdentity(_options) {
    console.log("verifyIdentity", _options);
    throw new Error("Biometric authentication is not available on web platform.");
  }
  getCredentials(_options) {
    console.log("getCredentials", _options);
    throw new Error("Credential storage is not available on web platform.");
  }
  setCredentials(_options) {
    console.log("setCredentials", _options);
    throw new Error("Credential storage is not available on web platform.");
  }
  deleteCredentials(_options) {
    console.log("deleteCredentials", _options);
    throw new Error("Credential storage is not available on web platform.");
  }
  isCredentialsSaved(_options) {
    console.log("isCredentialsSaved", _options);
    return Promise.resolve({ isSaved: false });
  }
  getPluginVersion() {
    return __async(this, null, function* () {
      return { version: "web" };
    });
  }
};
export {
  NativeBiometricWeb
};
/**i18n:5a2c3827deb5207c9b2cd52e3c980a766623046180337536c8d49c0b2e22128f*/
//# sourceMappingURL=web-ONAVYHY6.js.map
