<script setup></script>

<template>
  <div class="login-container">
    <input class="text-input" placeholder="Username" />
    <input class="text-input" placeholder="Password" />
    <button class="login-button" @click="handleLogin">Log In</button>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 8px;
}

.text-input {
  border: 1px solid black;
  border-radius: 4px;
  padding: 4px;
  font-weight: 500;
}

.login-button {
  width: 100%;
  border-radius: 4px;
  border: 1px solid black;
  cursor: pointer;
}
</style>
