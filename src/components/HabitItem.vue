<script setup>
import { useHabitsStore } from '../stores/habits'
const props = defineProps({ habit: Object })
const store = useHabitsStore()
</script>

<template>
  <div class="flex items-center justify-between bg-gray-50 p-4 rounded-lg border border-gray-200">
    <span class="text-gray-800 font-medium">{{ habit.name }}</span>
   <div class="flex gap-2 items-center">
    <button
      @click="store.toggle(habit.id)"
      class="px-3 py-1.5 text-sm rounded-md transition duration-200"
      :class="habit.history[new Date().toISOString().slice(0, 10)]
        ? 'bg-green-500 text-white hover:bg-green-600'
        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
    >
      Done Today
    </button>
    <button @click="store.deleteHabit(habit.id)"      class="px-3 py-1.5 text-sm rounded-md transition duration-200 bg-red-500 text-white" >
      Delete
    </button>
    </div>
  </div>
</template>
