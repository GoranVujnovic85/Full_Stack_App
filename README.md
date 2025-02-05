
## 📂 Project Structure


The_Kitchen/
|-- backend/                                     // Backend folder (Node.js, Express, MySQL)
|   |-- node_modules/
|   |-- config/
|   |-- controllers/
|   |-- migrations/
|   |-- models/
|   |-- routes/
|   |-- seeders/
|   |-- middlewares/
|   |-- utils/
|   |-- uploads/
|   |-- .env
|   |-- package.json
|   |-- package-lock.json
|   |-- server.js                                // Backend server (port 3000)
|
|-- frontend/                                    // Frontend folder (Vue.js)
|   |-- node_modules/
|   |-- public/
|   |-- src/
|   |   |-- assets/                              // Slike, CSS, fontovi
|   |   |-- components/                          // Vue komponente
|   |   |-- views/                               // Stranice (Home.vue, Order.vue...)
|   |   |-- router/                              // Vue Router konfiguracija
|   |   |-- store/                               // Vuex/Pinia store za upravljanje stanjem
|   |   |-- App.vue                              // Glavna Vue komponenta
|   |   |-- main.js                              // Ulazni fajl Vue aplikacije
|   |-- .env                                     // Frontend environment variables
|   |-- package.json
|   |-- package-lock.json
|   |-- vite.config.js                           // Konfiguracija za Vite