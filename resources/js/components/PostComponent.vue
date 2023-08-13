<template>
    <div class="container">
        <CreateComponent class="w-50"></CreateComponent>
        <IndexComponent></IndexComponent>
        <!-- <table class="table text-center">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Job</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="person in persons">
                    <th scope="row">{{ person.id }}</th>
                    <td>{{ person.name }}</td>
                    <td>{{ person.age }}</td>
                    <td>{{ person.job }}</td>
                </tr>
            </tbody>
        </table> -->
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
    // mounted(){
    //     this.getPersons()
    // },
    // methods: {
    //     getPersons(){
    //         axios.get('/persons')
    //         .then(res => {
    //             this.persons = res.data
    //         })
    //     }
    // }
}

</script>
<style scoped>

</style>
