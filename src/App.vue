<template>
  <div class="container">
      <Header :quoteCount="quotes.length" :maxQuotes="maxQuotes"/>
      <NewQuote @quoteAdded="newQuote"/>
    <QuoteGrid :quotes="quotes" @quoteDeleted="deleteQuote"/>
  </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid.vue';
import NewQuote from './components/NewQuote.vue';
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
    QuoteGrid,
    NewQuote,
  },
  data: function() {
      return {
          quotes: [],
          maxQuotes: 10,
      }
  },
  methods: {
      newQuote(quote) {
          if(this.quotes.length >= this.maxQuotes) {
            alert('You must delete some quotes first');
            return false;
          }
          this.quotes.push(quote);
      },
      deleteQuote(index) {
          this.quotes.splice(index, 1);
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
    letter-spacing: 1px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container {
  color: #2c3e50;
  margin: 2rem auto;
  max-width: 1290px;
}
</style>
