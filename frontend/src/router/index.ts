import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Contact from '../views/Contact.vue';
import LogIn from '../views/LogIn.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/contact', component: Contact },
  { path: '/login', component: LogIn },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;