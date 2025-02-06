<template>
  <div class="home">
    <div class="welcome-container">
      <h1>Dobrodošli u našu kuhinju!</h1>
      <p class="description">
        Služimo jela pripremljena sa ljubavlju i pažnjom, koristeći samo najfinije zemljane posude koje očuvavaju
        autentičnost i ukus svakog obroka.
      </p>
    </div>
    <div class="earthware-image-container">
      <img src="../assets/earthware-pot.jpg" alt="Zemljana posuda" class="earthware-image" />
    </div>
  </div>
</template>
  
<script>
  export default {
    name: 'Home',
  };
</script>
  
<style>
  .home {
    font-family: 'Georgia', serif;
    background-color: #f4e1c1;
    color: #3e2723; 
    padding: 20px;
  }
  
  .welcome-container {
    text-align: center;
    padding: 50px 20px;
  }
  
  h1 {
    font-size: 3em;
    font-weight: bold;
    color: #6d4c41;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  .description {
    font-size: 1.5em;
    color: #3e2723;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
  
  .earthware-image-container {
    display: flex;
    justify-content: center;
    padding: 20px;
  }
  
  .earthware-image {
    width: 80%;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
  }
  
  .earthware-image:hover {
    transform: scale(1.05); 
  }
</style>