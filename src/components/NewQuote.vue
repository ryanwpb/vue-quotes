<template>
<div>
      <form>
        <h3>What's Your Favorite Quote?</h3>
        <label for="quote">Quote</label>
        <textarea name="" id="" cols="30" rows="2" v-model="quote" placeholder="Add quote here..."></textarea>
        <input type="submit" @click.prevent="createNew()" value="Add Quote" id="submit">
    </form>

    <div class="alert-container">
        <div class="alert">To delete a quote, simply double click it.</div>
    </div>
</div>
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
        },
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

textarea, input {
    display: block;
    width: 100%;
    border-radius: .25rem;
    margin: 1.5rem 0 0;
    
}

textarea {
    border: solid 1px #ccc;
}

input {
    background: #F3136F;
    color: #fff;
    padding: .5rem;
    cursor: pointer;
    border: solid 1px #F3136F;
    box-shadow: 3px 10px 20px 0px rgb(243 156 196);
    transition: all 0.2s ease-in-out;
}

input:active {
    box-shadow: none;
    outline: none;
}

input:focus {
    outline: none;
}

.alert {
    position: absolute;
    display: none;
    /* left: 50px; */
    opacity: 1;
    transition: all .5sec ease-out;
    top: 25%;
    right: 2%;
    padding: 1rem;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    border-radius: .25rem;
    font-weight: bold;
}

.alert.removed {
  right: -50px;
  opacity: 0;
}
</style>