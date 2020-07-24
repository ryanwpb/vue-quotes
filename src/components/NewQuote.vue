<template>
    <form>
        <h3>What's Your Favorite Quote?</h3>
        <label for="quote">Quote</label>
        <textarea name="" id="" cols="30" rows="2" v-model="quote" placeholder="Add quote here..."></textarea>
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
form {
    max-width: 367px;
    margin: 0 auto;
    width: 100%;
    padding: 2rem;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    border-radius: .25rem;
}

textarea, button {
    display: block;
    width: 100%;
    border-radius: .25rem;
    margin: 1.5rem 0 0;
    
}

textarea {
    border: solid 1px #ccc;
}

button {
    background: #F3136F;
    color: #fff;
    padding: .5rem;
    cursor: pointer;
    border: solid 1px #F3136F;
    box-shadow: 3px 10px 20px 0px rgb(243 156 196);
    transition: all 0.2s ease-in-out;
}

button:hover {
    box-shadow: none;
}
</style>