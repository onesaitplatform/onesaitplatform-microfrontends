import { defineStore } from "pinia";
import { createPinia } from "pinia"; // Import createPinia
import { getEnvBaseUrl } from "../../env-config";
// Define the API configuration

export const API_CONFIG = {
  baseURL: getEnvBaseUrl(),
  token: "",
  role: "",
};

// Define the Pinia store
export const useGlobalStore = defineStore({
  id: "global",
  state: () => ({
    baseURL: API_CONFIG.baseURL,
    token: API_CONFIG.token,
    role: API_CONFIG.role,
  }),
  getters: {
    getBaseURL: (state) => state.baseURL,
    getToken: (state) => state.token,
  },
  actions: {
    setBaseURL(baseURL: string) {
      this.baseURL = baseURL;
    },
    setToken(token: string) {
      this.token = token;
    },
    setRole(role: string) {
      this.role = role;
    },
  },
});

// Create the Pinia instance
export const pinia = createPinia();

// Install the Pinia instance globally
export function setupPinia() {
  pinia.use(store);
}
