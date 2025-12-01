<template>
  <div class="register-container">
    <h1>Регистрация</h1>
    
    <form @submit.prevent="handleRegister">
      <div class="form-group">
        <label for="email">Email</label>
        <input 
          id="email"
          v-model="email"
          type="email"
          placeholder="example@mail.com"
        />
      </div>

      <div class="form-group">
        <label for="password">Пароль</label>
        <input 
          id="password"
          v-model="password"
          type="password"
          placeholder="••••••••"
        />
      </div>

        <div class="form-group">
        <label for="confirmPassword">Повторите пароль</label>
        <input 
          id="confirmPassword"
          v-model="confirmPassword"
          type="confirmPassword"
          placeholder="••••••••"
        />

      <p v-if="error" class="error-text">
        {{ error }}
      </p>

              <button type="submit" class="btn-primary">
        Зарегистрироваться
      </button>
      </div>
    </form>

    <p class="text-center">
  Уже есть аккаунт?
  <router-link to="/login" class="link-button">Войти</router-link>
</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const error = ref<string | null>(null);

const handleRegister = async () => {
  if (!email.value || !password.value || !confirmPassword.value) {
    error.value = 'Заполните все поля';
    return;
  }

  if (password.value !== confirmPassword.value) {
    error.value = 'Пароли не совпадают';
    return;
  }

  if (password.value.length < 6) {
    error.value = 'Пароль должен быть минимум 6 символов';
    return;
  }

  error.value = null;

  try {
    await fetch('http://localhost:8080/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });
  } catch (err) {
    error. value = 'Ошибка сети';
    console.error(err)
  }
};
</script>

<style scoped>
.register-container {
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
