<template>
  <section>
    <h2>{{ title}}</h2>
    counter: {{ $store.state.counter.counter}}
    <button v-on:click="$store.commit('counter/countUp')">+1</button>
  </section>
</template>

<script>
export default {
  date: function(){
    title: 'Countup app'
  }
}
</script>