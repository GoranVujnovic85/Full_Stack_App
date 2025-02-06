import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import './style.css';
import router from './router';  // Import the router you defined in index.ts

// Create the Vue application
const app = createApp(App);

// Set the global URL base for the API
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

// Add Axios to global `app.config.globalProperties`
app.config.globalProperties.$axios = axios;

// Add the router to the Vue application
app.use(router);

// Mounting the application
app.mount('#app');