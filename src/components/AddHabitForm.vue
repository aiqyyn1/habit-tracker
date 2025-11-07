<script setup>
import { ref } from 'vue'
import { useHabitsStore } from '../stores/habits'

const store = useHabitsStore()
const name = ref('')

function add() {
  if (!name.value.trim()) return
  store.addHabit(name.value)
  name.value = ''
}
</script>

<template>
  <div class="flex gap-2">
    <input
      v-model="name"
      placeholder="New habit..."
      class="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:(outline-none ring-2 ring-blue-400)"
    />
    <button
      @click="add"
      class="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
    >
      Add
    </button>
  </div>
</template>
