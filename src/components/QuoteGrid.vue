<template>
    <div class="quotes">
        <Quote :key="quote" v-for="(quote, index) in quotes" @dblclick.native="deleteQuote(index)">
            {{ quote }}
        </Quote>
    </div>
</template>

<script>
import Quote from './Quote'

export default {
    props: ['quotes'],
    components: {
        Quote
    },
    methods: {
        deleteQuote(index) {
            this.$emit('quoteDeleted', index)
        }
    }
}
</script>

<style scoped>
.quotes {
  margin: 4rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
</style>