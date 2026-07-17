<script setup>
import { computed, ref } from 'vue'
import trafficCone from '@/assets/traffic-cone.png'
import LoginForm from '@/components/auth/LoginForm.vue'

const isLoginFormShown = ref(false)
const title = computed(() => (isLoginFormShown.value ? 'Login' : 'Work in Progress'))

function showLoginForm() {
  isLoginFormShown.value = !isLoginFormShown.value
}
</script>

<template>
  <div class="main-container">
    <button
      class="show-login-button"
      type="button"
      :aria-expanded="isLoginFormShown"
      aria-label="Toggle login form"
      @click="showLoginForm"
    >
      <img class="supporting-icon" :src="trafficCone" alt="" />
    </button>

    <div class="title-text">
      <Transition name="fade" mode="out-in">
        <h3 :key="title">{{ title }}</h3>
      </Transition>
    </div>

    <Transition name="slide-fade">
      <LoginForm v-if="isLoginFormShown" />
    </Transition>
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);

  height: 100vh;
}

.title-text h3 {
  font-weight: var(--font-weight-bold);
}

.supporting-icon {
  height: 48px;
  width: 48px;
}

.show-login-button {
  background: none;
  border: none;
  cursor: pointer;
  margin: 0px;
  padding: 0px;
  transition: transform var(--transition-base);
}

.show-login-button:hover {
  transform: scale(1.05);
}

.show-login-button:active {
  transform: translateY(2px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity var(--transition-base);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition:
    opacity var(--transition-base),
    transform var(--transition-base);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (prefers-reduced-motion: reduce) {
  .show-login-button,
  .fade-enter-active,
  .fade-leave-active,
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: none;
  }

  .show-login-button:hover {
    transform: none;
  }
}
</style>
