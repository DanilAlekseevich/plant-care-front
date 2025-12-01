import type { User } from '../types/auth';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

class AuthService {
  private token: string | null = null;

  async login(email: string, password: string): Promise<User> {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Ошибка входа');
    }

    const data = await response.json();
      this.token = data.token;
      localStorage.setItem('token', this.token ?? '');
    return data.user;
  }

  async register(email: string, password: string, name: string): Promise<User> {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, name }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Ошибка регистрации');
    }

    const data = await response.json();
    this.token = data.token;
    localStorage.setItem('token', this.token ?? '');
    return data.user;
  }
}

export const authService = new AuthService();
