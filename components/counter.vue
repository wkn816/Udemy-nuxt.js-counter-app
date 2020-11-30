<template>
  <section>
    <h2>{{ title}}</h2>
    counter: {{ $store.state.counter.counter}}
    <button v-on:click="$store.commit('counter/countUp')">+1</button>
    <button v-on:click="$store.commit('counter/reset')">Reset</button>
  </section>
</template>

<script>
export default {
  date: function(){
    title: 'Countup'
  }
}
</script>