<template>
  <div class="container">
      <NewQuote @quoteAdded="newQuote"/>
    <QuoteGrid :quotes="quotes"/>
  </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid.vue';
import NewQuote from './components/NewQuote.vue'
export default {
  name: 'App',
  components: {
    QuoteGrid,
    NewQuote,
  },
  data: function() {
      return {
          quotes: ['Placeholder quote here...'],
          maxQuotes: 10,
      }
  },
  methods: {
      newQuote(quote) {
          this.quotes.push(quote)
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
  color: #2c3e50;
  margin: 2rem auto;
  max-width: 1290px;
}
</style>
