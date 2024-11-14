<script setup lang="ts">
import { type Position } from "~/types/toasts";
import { useToastsStore } from "@/store/toasts";

// Getting a list of toasts given their position
function getToastsByPosition(position: Position) {
  const toasts = toastsStore.getToastsByPosition(position);
  return position.startsWith("top") ? [...toasts].reverse() : toasts;
}

// Defining animation for a position
function getTransitionName(position: Position): string {
  return position.startsWith("top") ? "toast-reverse" : "toast";
}

const toastsStore = useToastsStore();
// All available positions
const positions: Position[] = [
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
];
</script>

<template>
  <teleport to="body">
    <div class="toast">
      <transition-group name="toast-container" tag="div" class="toast__wrapper">
        <div
          v-for="position in positions"
          :key="position"
          :class="['toast__container', `toast__container--${position}`]"
        >
          <transition-group
            :name="getTransitionName(position)"
            tag="div"
            class="toast__list"
          >
            <div
              class="toast__item"
              v-for="toast in getToastsByPosition(position)"
              :key="toast.id"
              :class="'toast--theme--' + toast?.options?.theme"
            >
              <div class="toast__content">
                <p class="toast__text">{{ toast.text }}</p>
              </div>
              <div
                class="toast__progressbar"
                :style="`animation-duration: ${toast.options.duration}ms;`"
              ></div>
            </div>
          </transition-group>
        </div>
      </transition-group>
    </div>
  </teleport>
</template>
