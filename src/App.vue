<template>
  <div class="container">
    <QuoteGrid :quotes="quotes"/>
  </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid.vue'
export default {
  name: 'App',
  components: {
    QuoteGrid,
  },
  data: function() {
      return {
          quotes: ['Placeholder quote here...'],
          maxQuotes: 10,
      }
  }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Avenir, Helvetica, Arial, sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container {
  text-align: center;
  color: #273f57;
  margin: 2rem auto;
  max-width: 1290px;
}
</style>
