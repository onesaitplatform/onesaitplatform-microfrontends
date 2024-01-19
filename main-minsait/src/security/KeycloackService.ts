import Keycloak from "keycloak-js";

import { getEnvKeycloakOptions } from "../../env-config";
const keycloakVars = getEnvKeycloakOptions();
const options: Keycloak.KeycloakConfig = {
  ...keycloakVars,
};
interface CallbackOneParam<T1 = void, T2 = void> {
  (param1: T1): T2;
}
const keycloakInstance = new Keycloak(options);

const Login = (onAuthenticatedCallback: CallbackOneParam<void>) => {
  keycloakInstance
    .init({ onLoad: "login-required" })
    .then((authenticated: boolean) => {
      if (authenticated) {
        const token: string | undefined = keycloakInstance.token;
        const refreshToken: string | undefined = keycloakInstance.refreshToken;

        if (token && refreshToken) {
          localStorage.setItem("vueToken", token);
          localStorage.setItem("vue-refresh-token", refreshToken);
        }

        onAuthenticatedCallback();
        console.log("Authenticated!");
      } else {
        alert("Not authenticated");
      }
    })
    .catch((e: Error) => {
      console.dir(e);
      console.log(`Keycloak init exception: ${e}`);
    });
};
const logout = () => {
  keycloakInstance.logout();
};

const KeyCloakService = {
  CallLogin: Login,
  logout,
};

export default KeyCloakService;
