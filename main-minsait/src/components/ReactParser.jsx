import {
  ref,
  onMounted,
  onBeforeUnmount,
  onUpdated,
} from "vue/dist/vue.esm-bundler.js";
import React from "react";
import ReactDOM from "react-dom/client";

const firstLoad = new Promise((resolve) => setTimeout(resolve, 1000));

async function fetchButton() {
  // simulate long network delay
  await firstLoad;

  // uncomment to simulate failed load
  // throw new Error("Failed to load button from remote.");

  return (await import("reactApp/App")).default;
}
export default {
  name: "ReactButton",
  props: {
    text: String,
    onClick: Function,
  },
  setup(props, { refs }) {
    const root = ref(null);
    const error = ref(null);
    const ButtonComponent = ref(null);
    const reactRoot = ref(null);
    const updateReactComponent = () => {
      const rootElement = root.value;

      if (!ButtonComponent.value || !!error.value || !rootElement) return;

      reactRoot.value = ReactDOM.createRoot(rootElement);
      const element = React.createElement(ButtonComponent.value);
      reactRoot.value.render(element);
    };

    const unmountReactComponent = () => {
      const rootElement = root.value;

      if (rootElement) {
        reactRoot.value.unmount();
      }
    };

    onMounted(updateReactComponent);
    onUpdated(updateReactComponent);
    onBeforeUnmount(unmountReactComponent);

    fetchButton()
      .then((b) => {
        ButtonComponent.value = b;
        updateReactComponent();
      })
      .catch((e) => {
        error.value = e;
      });

    return { root, error };
  },
  template: `
    <div v-if="error">Error loading button</div>
    <div v-else ref="root">Loading button...</div>
  `,
};
