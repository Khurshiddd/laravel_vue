import './bootstrap';
import PostComponent from './components/PostComponent.vue';
import SinglePostComponent from './components/SinglePostComponent.vue';
import { createApp } from 'vue';


const app = createApp({
    el: '#app',
    components: {
        PostComponent,
        SinglePostComponent,
    }
});


app.mount('#app');
