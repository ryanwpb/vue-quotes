<template>
    <div class="header">
        <div class="progress">
            <div class="progress-bar" role="progress bar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" :style="{width:(quoteCount / maxQuotes) * 100 + '%' }">
                {{ quoteCount  }} / {{ maxQuotes }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header', 
    props: ['quoteCount', 'maxQuotes']
}
</script>

<style scoped>

.header {
    margin: 3rem auto;
}
/* 
.progress-bar {
    padding: .5rem;
    background: #e5e5e5;
    border-radius: .25rem;
} */

</style>