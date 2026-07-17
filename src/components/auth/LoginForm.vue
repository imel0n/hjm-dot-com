<script setup>
import { ref } from 'vue'

const emit = defineEmits(['submit'])

const username = ref('')
const password = ref('')

function handleLogin() {
  emit('submit', { username: username.value, password: password.value })
}
</script>

<template>
  <form class="login-container" @submit.prevent="handleLogin">
    <input v-model="username" class="text-input" type="text" autocomplete="username" placeholder="Username" />
    <input
      v-model="password"
      class="text-input"
      type="password"
      autocomplete="current-password"
      placeholder="Password"
    />
    <button class="login-button" type="submit">Log In</button>
  </form>
</template>

<style scoped>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: var(--space-sm);
}

.text-input {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: 10px 12px;
  font-weight: 500;
  background: transparent;
  transition: border-color var(--transition-base);
}

.text-input::placeholder {
  color: var(--color-text-muted);
}

.text-input:focus {
  outline: none;
  border-color: var(--color-border-focus);
}

.login-button {
  width: 100%;
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
  padding: 10px 12px;
  background: transparent;
  cursor: pointer;
  transition:
    border-color var(--transition-base),
    background-color var(--transition-base);
}

.login-button:hover {
  border-color: var(--color-border-focus);
}

.login-button:active {
  transform: translateY(1px);
}
</style>
