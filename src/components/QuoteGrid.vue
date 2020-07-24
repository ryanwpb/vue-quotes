<template>
    <div>
        <appQuote :key="quote" v-for="quote in quotes">
            {{ quote }}
        </appQuote>
    </div>
</template>

<script>
import Quote from './Quote'

export default {
    props: ['quotes'],
    components: {
        appQuote: Quote
    },
}
</script>

<style scoped>

</style>