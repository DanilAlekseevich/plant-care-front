import type { User } from '@/types/auth';

class AuthService {
  // Для тестирования сохраняем в sessionStorage
  // Позже заменим на реальное API
  
  async login(email: string, password: string): Promise<User> {
    // TODO: Отправить POST запрос на backend
    // POST /api/auth/login
    // Сохранить token
    // Вернуть User
    throw new Error('Not implemented');
  }

  async register(email: string, password: string, name: string): Promise<User> {
    // TODO: Отправить POST запрос на backend
    // POST /api/auth/register
    // Сохранить token
    // Вернуть User
    throw new Error('Not implemented');
  }

  async logout(): Promise<void> {
    // TODO: Очистить token
  }

  getCurrentUser(): User | null {
    // TODO: Получить User из sessionStorage/localStorage
    return null;
  }
}

export const authService = new AuthService();
