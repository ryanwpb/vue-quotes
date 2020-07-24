<template>
    <form>
        <label for="quote">Quote</label>
        <textarea name="" id="" cols="30" rows="3" v-model="quote"></textarea>
        <button type="submit" @click.prevent="createNew">Add Quote</button>
    </form>
</template>

<script>
export default {
    data: function() {
        return {
            quote: ''
        };
    },
    methods: {
        createNew() {
            this.$emit('quoteAdded', this.quote);
            this.quote = '';
        }
    }
}
</script>

<style scoped>

</style>