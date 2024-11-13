<script setup lang="ts">
import { useToastsStore } from "@/store/toasts";
import { type Position } from "./types/toasts";

const toastsStore = useToastsStore();

function onToastClick(position: Position) {
  toastsStore.toast("some text", {
    duration: 2500,
    position: position,
    theme: "light",
  });
}
</script>

<template>
  <div>
    <button @click="onToastClick('top-left')">top-left</button>
    <button @click="onToastClick('top-right')">top-right</button>
    <button @click="onToastClick('bottom-left')">bottom-left</button>
    <button @click="onToastClick('bottom-right')">bottom-right</button>
  </div>

  <MainToast />
</template>
