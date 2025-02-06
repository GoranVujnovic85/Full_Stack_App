<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/order">Dish</router-link></li>
        <li><router-link to="/payments">Payments</router-link></li>  
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
    <router-view></router-view> 
  </div>
</template>

<style>

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  nav {
    background-color: #333; 
    padding: 15px 30px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
    border-radius: 10px; 
  }

  ul {
    display: flex;
    list-style: none;
    padding: 0;
    justify-content: center;
    margin: 0;
  }

  li {
    margin: 0 15px; 
  }

  a {
    text-decoration: none;
    color: #fff; 
    font-size: 18px;
    transition: color 0.3s ease; 
  }

  a:hover {
    color: #ff6347; 
    font-weight: bold; 
  }

  .router-link-active {
    color: #ff6347; 
    font-weight: bold;
  }
</style>