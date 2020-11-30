export const state = () => ({
  counter: 0
})

export const mutations = {
  countUp: function(state){
    state.counter++
  },
  reset: function(state){
    state.counter = 0
  }
}