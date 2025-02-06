<template>
    <div class="auth-container">
        <div class="auth-box">
            <h2>{{ isLogin ? "Login" : "Sign Up" }}</h2>
  
            <div v-if="!isLogin">
                <input v-model="username" type="text" placeholder="Username" required />
            </div>
  
            <input v-model="email" type="email" placeholder="Email" required />
            <input v-model="password" type="password" placeholder="Password" required />
  
            <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  
            <button @click="isLogin ? login() : signup()">
                {{ isLogin ? "Log in" : "Register" }}
            </button>
  
            <p @click="toggleMode" class="toggle-text">
                {{ isLogin ? "You don't have an account? Register" : "Already have an account? Sign up" }}
            </p>
        </div>
    </div>
</template>
  
<script setup lang="ts">
    import { ref } from "vue";
    import { useRouter } from "vue-router";
    import axios from "axios";
    
    const router = useRouter();
    const isLogin = ref(true);
    const username = ref("");
    const email = ref("");
    const password = ref("");
    const errorMessage = ref("");
    
    const toggleMode = () => {
        isLogin.value = !isLogin.value;
        errorMessage.value = "";
    };
  
    const login = async () => {
        if (!email.value || !password.value) {
            errorMessage.value = "Enter your email and password";
            return;
        }
  
        try {
            const response = await axios.post("http://localhost:3000/api/public/login", {
                email: email.value,
                password: password.value,
            });
  
            const { token, role } = response.data;
            localStorage.setItem("token", token); // Store the token
  
            if (role === "admin") {
                router.push("/admin-dashboard");
            } else {
            router.push("/customer-dashboard");
            }
        } catch (error) {
            errorMessage.value = "Invalid login information";
            console.error("Login error:", error);
        }
    };
  
    const signup = async () => {
        if (!username.value || !email.value || !password.value) {
            errorMessage.value = "Enter all information";
            return;
        }
  
        try {
            await axios.post("http://localhost:3000/api/public/register", {
                username: username.value,
                email: email.value,
                password: password.value,
            });
  
            alert("Registration successful! You can sign up now.");
            isLogin.value = true;
        } catch (error) {
            errorMessage.value = "Error during registration";
            console.error("Signup error:", error);
        }
    };
</script>
  
  <style scoped>
  .auth-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg );
  }
  
  .auth-box {
    background: white;
    padding: 30px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    width: 350px;
  }
  
  .auth-box h2 {
    margin-bottom: 20px;
    color: #333;
  }
  
  input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background: #ff7f50;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
  }
  
  button:hover {
    background: #e75d3e;
  }
  
  .error {
    color: red;
    margin-bottom: 10px;
  }
  
  .toggle-text {
    color: blue;
    cursor: pointer;
    margin-top: 15px;
  }
  
  .toggle-text:hover {
    text-decoration: underline;
  }
  </style>