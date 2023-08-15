import './bootstrap';
import PostComponent from './components/PostComponent.vue';
import { createApp } from 'vue';


const app = createApp({
    el: '#app',
    components: {
        PostComponent,
    }
});


app.mount('#app');
