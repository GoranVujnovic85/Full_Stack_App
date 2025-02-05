import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import './style.css';

// Set the global URL base for the API
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

// Kreiranje Vue aplikacije
const app = createApp(App);

// Dodavanje Axios-a u globalni `app.config.globalProperties`
app.config.globalProperties.$axios = axios;

// Montiranje aplikacije
app.mount('#app');