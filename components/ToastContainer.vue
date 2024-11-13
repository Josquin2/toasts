<template>
  <teleport to="body">
    <div class="toast">
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
              <img
                class="toast__icon"
                src=""
                alt=""
                v-if="toast?.options.type !== 'message'"
              />
              <p class="toast__text">{{ toast.text }}</p>
            </div>
            <div
              class="toast__progressbar"
              :style="`animation-duration: ${toast.options.duration}ms;`"
            ></div>
          </div>
        </transition-group>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { useToastsStore } from "@/store/toasts";

const toastsStore = useToastsStore();

type Position = "top-left" | "top-right" | "bottom-left" | "bottom-right";

const positions: Position[] = [
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
];

// Getting a list of toasts given their position
function getToastsByPosition(position: Position) {
  const toasts = toastsStore.getToastsByPosition(position);
  return position.startsWith("top") ? [...toasts].reverse() : toasts;
}

// Defining animation for a position
function getTransitionName(position: Position): string {
  return position.startsWith("top") ? "toast-reverse" : "toast";
}
</script>
