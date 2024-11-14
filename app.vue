<script setup lang="ts">
import { useToastsStore } from "@/store/toasts";
import type { ToastOptions } from "./types/toasts";

const toastsStore = useToastsStore();

interface ToastTriggerOption {
  id: number;
  label: string;
  message: string;
  options: ToastOptions;
}

// settings for buttons and corresponding toasts
const buttonOptions: ToastTriggerOption[] = [
  {
    id: 1,
    label: "Top-Left Dark",
    message: "This is a top-left message!",
    options: {
      duration: 3000,
      position: "top-left",
      theme: "dark",
    },
  },
  {
    id: 2,
    label: "Bottom-Right Light",
    message: "This is a bottom-right message!",
    options: {
      duration: 4000,
      position: "bottom-right",
      theme: "light",
    },
  },
  {
    id: 3,
    label: "Top-Right Dark",
    message: "This is a top-right message!",
    options: {
      duration: 5000,
      position: "top-right",
      theme: "dark",
    },
  },
  {
    id: 4,
    label: "Bottom-Left Light",
    message: "This is a bottom-left message!",
    options: {
      duration: 3000,
      position: "bottom-left",
      theme: "light",
    },
  },
];

// toast call function
function triggerToast(option: ToastTriggerOption) {
  toastsStore.toast(option.message, option.options);
}
</script>

<template>
  <div class="toast-buttons">
    <h2 class="toast-buttons__header">Toast Demo</h2>
    <div class="toast-buttons__container">
      <button
        v-for="option in buttonOptions"
        :key="option.id"
        class="toast-buttons__button"
        @click="triggerToast(option)"
      >
        {{ option.label }}
      </button>
    </div>
  </div>

  <MainToaster />
</template>

<style lang="scss">
.toast-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 8rem;

  &__header {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  &__container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  &__button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }
}
</style>
