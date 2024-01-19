<template>
  <div
    :style="state.styles"
    class="one-loading-fade full-height"
    :class="!props.fullScreen && 'one-loading-parent--relative  '"
  >
    <div :class="['one-loading-transition', { 'show-content': props.loading }]">
      <slot></slot>
    </div>
    <div
      data-name="OneLoading"
      role="progressbar"
      :aria-label="props.titleText ? null : props.text || 'loading'"
      :aria-labelledby="props.titleText ? 'loading-label' : null"
      :aria-describedby="props.description ? 'loading-description' : null"
      aria-live="assertive"
      :aria-busy="props.loading ? 'true' : 'false'"
      :aria-valuenow="props.spinner === 'progress' ? props.progress : null"
      aria-valuemin="0"
      aria-valuemax="100"
      tabindex="0"
      class="one-loading-mask"
      :class="[
        props.customClass,
        props.fullScreen && 'is-fullscreen',
        { 'no-show': !props.loading },
      ]"
    >
      <div class="one-loading-spinner">
        <template
          v-if="
            ['undeterminated', 'duration', 'progress'].includes(props.spinner)
          "
        >
          <svg
            :class="
              props.spinner === 'undeterminated'
                ? 'undeterminated'
                : 'determinated'
            "
            viewBox="25 25 50 50"
          >
            <circle class="path" cx="50" cy="50" r="20" fill="none" />
            <circle
              class="track"
              cx="50"
              cy="50"
              r="20"
              fill="none"
              :style="getTrackStyle()"
            />
          </svg>
        </template>
        <template v-if="props.spinner === 'circular'">
          <svg class="circular" viewBox="25 25 50 50">
            <circle class="path" cx="50" cy="50" r="20" fill="none" />
          </svg>
        </template>
        <template v-if="props.spinner === 'load'">
          <span class="one-icon-loading" />
        </template>
        <template
          v-if="
            props.spinner === 'pulse' ||
            ![
              'undeterminated',
              'duration',
              'progress',
              'circular',
              'load',
            ].includes(props.spinner)
          "
        >
          <span class="pulse" />
        </template>
        <div
          :class="{
            'loading-text-wrapper': true,
            'white-text': props.background === 'black',
          }"
        >
          <template v-if="props.text">
            <p class="one-loading-text">{{ props.text }}</p>
          </template>
          <template v-else-if="props.titleText">
            <p id="loading-label" class="one-loading-title">
              {{ props.titleText }}
            </p>
          </template>
          <template v-else-if="props.description">
            <p id="loading-description" class="one-loading-description">
              {{ props.description }}
            </p>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {
  onMounted,
  onUnmounted,
  reactive,
  watch,
  defineProps,
  getCurrentInstance,
} from "vue";

import { useI18n } from "vue-i18n";
const { t } = useI18n();
const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  background: {
    type: String,
    default: "rgb(255,255,255,0.9)",
  },
  customClass: {
    type: String,
    default: "",
  },
  spinner: {
    type: String,
    default: "undeterminated",
  },
  text: {
    type: String,
    default: "",
  },
  titleText: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  progress: {
    type: Number,
    default: 0,
  },
  duration: {
    type: Number,
    default: 1.5,
  },
  dashWidth: {
    type: Number,
    default: 25,
  },
  fullScreen: {
    type: Boolean,
    default: false,
  },
  scrollToTop: {
    type: Boolean,
    default: false,
  },
});
const state = reactive({
  styles: {},
  i18n: {},
});

const { proxy } = getCurrentInstance();
const circumference = 0;

const valueChanged = () => {
  setFullScreen();
};

onMounted(() => {
  state.styles = getStyles();
  if (proxy.$el.firstElementChild) {
  }

  setFullScreen();
});

const getCircumference = () => {
  const pi = 3.1415;
  const radius = 20;
  return 2 * pi * radius;
};

const getTrackStyle = () => {
  if (props.spinner === "undeterminated") {
    return {
      "stroke-dasharray": `calc(${getCircumference()} * ${
        props.dashWidth
      } / 100), calc(${getCircumference()} * (100 - ${props.dashWidth}) / 100)`,
    };
  } else if (props.spinner === "duration") {
    return {
      animation: `loading-determinated ${props.duration}s linear infinite`,
    };
  } else {
    return {
      "stroke-dashoffset": `calc(${getCircumference()} - ${getCircumference()} * ${
        props.progress
      } / 100)`,
    };
  }
};

const getSlotSize = () => {
  const { width, height } =
    proxy.$el.firstElementChild?.getBoundingClientRect();
  return {
    width: "100%",
    height: "100%",
  };
};

const getBackground = () => {
  switch (props.background) {
    case "black":
      return "rgba(7, 22, 46, 0.7)";
    case "white":
    default:
      return "rgba(255, 255, 255, 0.9)";
  }
};

const getStyles = () => {
  let style = {
    background: getBackground(),
  };

  if (!props.fullScreen) {
    style = {
      ...style,
      ...getSlotSize(),
    };
  }

  return style;
};

const setFullScreen = () => {
  if (props.fullScreen) {
    if (props.scrollToTop) window.scrollTo({ top: 0, behavior: "smooth" });

    const bodyList = Array.from(document.querySelectorAll("body"));
    for (const body of bodyList)
      body.style.overflow = props.loading ? "hidden" : "scroll";
  }
};

watch(() => props.loading, valueChanged);
</script>

<style scoped>
.one-loading-transition {
  transition: opacity 1s;
  height: 100%;
  z-index: 2 !important;
}

.show-content {
  z-index: 2;
  transition: opacity 0.2s;
  display: unset;
  opacity: 0;
}
.no-show {
  transition: display 1s;
  opacity: 0;
  display: none;
}
/* Aquí va el contenido de loading.scss */
</style>
