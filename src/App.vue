<script setup>
import AddHabitForm from './components/AddHabitForm.vue'
import HabitList from './components/HabitList.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-100 py-12 px-6">
    <div class="max-w-xl mx-auto bg-white shadow-md rounded-2xl p-8 space-y-8">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900">
        Habit Tracker
      </h1>

      <AddHabitForm />
      <HabitList />
    </div>
  </div>
</template>
