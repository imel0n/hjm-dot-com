<script setup>
import { ref } from 'vue'
import trafficCone from '@/assets/traffic-cone.png'
import LoginForm from '@/components/auth/LoginForm.vue'

const isLoginFormShown = ref(false)
function showLoginForm() {
  isLoginFormShown.value = !isLoginFormShown.value
}
</script>

<template>
  <div class="main-container">
    <button class="show-login-button" @click="showLoginForm">
      <img class="supporting-icon" :src="trafficCone" />
    </button>
    <div class="title-text">
      <h3 v-if="!isLoginFormShown">Work in Progress</h3>
      <h3 v-else>Login</h3>
    </div>

    <div v-if="isLoginFormShown">
      <LoginForm />
    </div>
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  height: 100vh;
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
}
</style>
