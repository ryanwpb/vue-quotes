<template>
    <div>
        <Quote :key="quote" v-for="quote in quotes">
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
}
</script>

<style scoped>

</style>