<template>
  <div class="no-data">
    <div class="no-data__no-info">
      <span class="no-data__image">
        <one-image class="no-data__no-file-image" :src="getImage()" lazy />
        <h1 v-if="props.titleText">{{ props.titleText }}</h1>
        <p v-if="props.bodyText">{{ props.bodyText }}</p>
        <one-button
          v-if="props.buttonText.length"
          icon="plus"
          icon-position="left"
          @click="openModal()"
        >
          {{ props.buttonText }}
        </one-button>
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance } from "vue";
const instance = getCurrentInstance();
const props = defineProps({
  image: {
    type: String,
    required: false,
  },
  buttonText: {
    default: "",
    type: String,
    required: false,
  },
  bodyText: {
    default: "",
    type: String,
    required: false,
  },
  titleText: {
    default: "",
    type: String,
    required: false,
  },
});
const getImage = () => {
  const base = import.meta.env.MODE === "development" ? "" : "/oneops-ui";
  return base + "/database.svg";
};

const openModal = async (info) => {
  instance.emit("addModal", true);
};
</script>

<style scoped lang="scss">
.no-data {
  width: 100%;
  &__no-info {
    display: flex;
    justify-self: center;
    margin-top: 200px;
    align-items: center;
    justify-content: center;
  }
  &__image {
    display: grid;
    gap: 1rem;
    place-items: center;
  }
  h1 {
    @include txt-title-200;
  }
  p {
    @include txt-subtitle-100;
  }
}
</style>
