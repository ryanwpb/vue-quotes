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
}
</style>