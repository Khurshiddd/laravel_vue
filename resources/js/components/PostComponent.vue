<template>
    <div class="container">
        <CreateComponent class="w-50"></CreateComponent>
        <IndexComponent ref="index"></IndexComponent>
    </div>
</template>
<script>
import CreateComponent from './CreateComponent.vue'
import IndexComponent from './IndexComponent.vue';
export default {
    name: "PostComponent",
    components: {
        CreateComponent,
        IndexComponent,
    },
    data(){
        return {
            persons: null
        }
    },
}

</script>
<style scoped>

</style>
