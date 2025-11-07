<script setup>
import { useHabitsStore } from '../stores/habits'
import HabitItem from './HabitItem.vue'
const store = useHabitsStore()
</script>

<template>
  <div class="space-y-3">
    <HabitItem v-for="h in store.habits" :key="h.id" :habit="h" />
  </div>
</template>
