<template>
  <section class="container">
    <div>
      <counter></counter>
      <hr>
      <counter></counter>
      <hr>
      <counter></counter>
      <hr>
    </div>
  </section>
</template>

<script>
import Counter from '~/components/Counter.vue'

export default {
  componets:{
     Counter
  }
}
</script>

