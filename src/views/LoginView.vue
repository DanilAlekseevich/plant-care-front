<template>
  <div class="login-container">
    <h1>Вход</h1>
    
    <form @submit.prevent="handleLogin">
      <!-- Email input -->
      <div class="form-group">
        <label for="email">Email</label>
        <input 
          id="email"
          v-model="email"
          type="email"
          placeholder="example@mail.com"
        />
      </div>

      <!-- Password input -->
      <div class="form-group">
        <label for="password">Пароль</label>
        <input 
          id="password"
          v-model="password"
          type="password"
          placeholder="••••••••"
        />
      </div>

      <!-- Submit button -->
      <button type="submit" class="btn-primary">
        Войти
      </button>
    </form>

    <!-- Link to Register -->
    <p class="text-center">
      Нет аккаунта?
<router-link to="/register">Зарегистрироваться</router-link>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');
const password = ref('');

const handleLogin = async () => {
  console.log('Login attempt:', { email: email.value, password: password.value });
  // TODO: Вызвать authService.login()
};

const goToRegister = () => {
  // TODO: Перейти на экран регистрации
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

input {
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
}

.btn-primary {
  padding: 12px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}

.btn-primary:active {
  transform: scale(0.98);
}

.text-center {
  text-align: center;
}

.link-button {
  background: none;
  border: none;
  color: #4CAF50;
  cursor: pointer;
  text-decoration: underline;
}
</style>
