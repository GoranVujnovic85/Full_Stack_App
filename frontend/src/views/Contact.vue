<template>
  <div class="contact-page">
    <div class="contact-header">
      <h1>Contact Us</h1>
      <p>We're here to assist you with anything. Feel free to reach out!</p>
    </div>
    <div class="contact-form">
      <form @submit.prevent="submitForm">
        <label for="name">Your Name:</label>
        <input type="text" id="name" v-model="form.name" placeholder="Enter your full name" required />
  
        <label for="email">Your Email:</label>
        <input type="email" id="email" v-model="form.email" placeholder="Enter your email address" required />
  
        <label for="subject">Subject:</label>
        <input type="text" id="subject" v-model="form.subject" placeholder="Subject of your message" required />
  
        <label for="message">Message:</label>
        <textarea id="message" v-model="form.message" placeholder="Write your message here..." required></textarea>
  
        <button type="submit" class="submit-btn">Send Message</button>
      </form>
    </div>
  </div>
</template>
  
<script>
  import axios from 'axios';
  export default {
    name: 'Contact',
    data() {
      return {
        form: {
          name: '',
          email: '',
          subject: '',
          message: '',
        },
      };
    },
    methods: {
      async submitForm() {
        try {
          const response = await axios.post('http://localhost:3000/api/public/messages', this.form);
          console.log('Server response:', response.data);
          alert('Message sent! We\'ll get back to you soon.');
          this.resetForm();
        } catch (error) {
          console.error('Error sending message:', error);
          alert('Failed to send message. Please try again.');
        }
      },
      resetForm() {
        this.form.name = '';
        this.form.email = '';
        this.form.subject = '';
        this.form.message = '';
      },
    },
  };
</script>
  
<style>

  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden; 
  }

  .contact-page {
    background-image: url('../assets/contact.png');
    background-size: cover;
    background-position: center;
    color: greenyellow;
    font-family: 'Roboto', sans-serif;
    width:auto;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box; 
    padding: 0; 
    overflow: hidden; 
  }

  
  .contact-header h1 {
    font-size: 3rem;
    font-weight: bold;
    color: #fff;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
  }
  
  .contact-header p {
    font-size: 1.2rem;
    margin-top: 10px;
    font-style: italic;
    color: #ddd;
  }
  
  .contact-form {
    background-color: rgba(0, 0, 0, 0.7);
    padding: 30px;
    border-radius: 10px;
    max-width: 600px;
    margin: 0 auto;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.6);
  }
  
  .contact-form label {
    display: block;
    font-size: 1.1rem;
    margin-top: 15px;
    margin-bottom: 5px;
    color: #fff;
  }
  
  .contact-form input,
  .contact-form textarea {
    width: 100%;
    padding: 12px;
    border: 2px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
    background-color: #f4f4f4;
    color: black; /* Boja teksta postavljena na crnu */
    margin-bottom: 15px;
  }
  
  .contact-form textarea {
    resize: vertical;
    height: 150px;
  }
  
  .contact-form .submit-btn {
    background-color: #ff7f50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    cursor: pointer;
    width: 100%;
    transition: background-color 0.3s ease;
  }
  
  .contact-form .submit-btn:hover {
    background-color: #e75d3e;
  }
</style>