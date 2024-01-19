const serverBaseUrl = "SERVER_BASE_URL";
const controlUrlEnv = "SERVERBASEURL";

const serverAuthUrl = "SERVER_AUTH_URL";
const controlAuthUrlEnv = "SERVERAUTHURL";

const serverAuthRealm = "AUTH_REALM";
const controlAuthRealm = "AUTHREALM";

const serverAuthClientId = "AUTH_CLIENT_ID";
const controlAuthClientId = "AUTHCLIENTID";

const serverAuthClientSecret = "AUTH_CLIENT_SECRET";
const controlAuthClientSecret = "AUTHCLIENTSECRET";

const serverLogoutTimer = "LOGOUT_TIMER";
const controlLogoutTimer = "LOGOUTTIMER";
const getEnvBaseUrl = () => {
  return serverBaseUrl.replace(/_/g, "") !== controlUrlEnv
    ? serverBaseUrl
    : import.meta.env.VITE_BASE_URL || "";
};

const getLogoutTimer = () => {
  return serverLogoutTimer.replace(/_/g, "") !== controlLogoutTimer
    ? serverLogoutTimer
    : import.meta.env.VITE_LOGOUT_TIMER || "";
};

const getEnvKeycloakOptions = () => {
  const url =
    serverAuthUrl.replace(/_/g, "") !== controlAuthUrlEnv
      ? serverAuthUrl
      : import.meta.env.VITE_KEYCLOAK_URL || "";

  const realm =
    serverAuthRealm.replace(/_/g, "") !== controlAuthRealm
      ? serverAuthRealm
      : import.meta.env.VITE_KEYCLOAK_REALM || "";

  const clientId =
    serverAuthClientId.replace(/_/g, "") !== controlAuthClientId
      ? serverAuthClientId
      : import.meta.env.VITE_KEYCLOAK_CLIENT_ID || "";

  const clientSecret =
    serverAuthClientSecret.replace(/_/g, "") !== controlAuthClientSecret
      ? serverAuthClientSecret
      : import.meta.env.VITE_KEYCLOAK_CLIENT_SECRET || "";

  return {
    url,
    realm,
    clientId,
    clientSecret,
  };
};

export { getEnvBaseUrl, getEnvKeycloakOptions, getLogoutTimer };
