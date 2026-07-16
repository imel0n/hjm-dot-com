<script setup>
import trafficCone from '@/assets/traffic-cone.png'
</script>

<template>
  <div class="main-container">
    <img class="supporting-icon" :src="trafficCone" />
    <h3 class="body-text">Work in Progress</h3>
  </div>
</template>

<style scoped>
.main-container {
  font-family: 'Helvetica Neue';
  font-weight: 800;

  /* background: #fbf5e9; */

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

.body-text {
  margin: 0;
}
</style>
