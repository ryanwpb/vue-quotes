<template>
    <div class="quote">
        <slot></slot>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.quote {
    padding: 1rem;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    border-radius: .25rem;
    font-size: 18px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}

.quote:hover {
    color: #fff;
    background: rgb(243 156 196);
    box-shadow: 3px 10px 20px 0px rgb(243 156 196);
}
</style>