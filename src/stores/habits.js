import { defineStore } from 'pinia'

export const useHabitsStore = defineStore('habits', {
  state: () => ({
    habits: localStorage.getItem('habits') ? JSON.parse(localStorage.getItem('habits')) : []
  }),
  actions: {
    addHabit(name) {
      this.habits.push({
        id: Date.now(),
        name,
        history: {}
      })
      localStorage.setItem('habits', JSON.stringify(this.habits))
    },
    toggle(id) {
      const today = new Date().toISOString().slice(0, 10)
 

      const habit = this.habits.find(h => h.id === id)
   
      habit.history[today] = !habit.history[today]
      localStorage.setItem('habits', JSON.stringify(this.habits))
    },
    deleteHabit(id) {
      this.habits = this.habits.filter(h => h.id !== id);
      localStorage.setItem('habits', JSON.stringify(this.habits));
    }
  }
})
