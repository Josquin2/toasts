<template>
  <teleport to="body">
    <div class="toast">
      <transition-group name="toast-container" tag="div" class="toast__wrapper">
        <ToastContainer
          v-for="position in positions"
          :key="position"
          :position="position"
          :toasts="toastsStore.getToastsByPosition(position)"
        />
      </transition-group>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { useToastsStore } from "@/store/toasts";
import ToastContainer from "@/components/ToastContainer.vue";

type Position = "top-left" | "top-right" | "bottom-left" | "bottom-right";

// All available positions
const positions: Position[] = [
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
];

const toastsStore = useToastsStore();
</script>
