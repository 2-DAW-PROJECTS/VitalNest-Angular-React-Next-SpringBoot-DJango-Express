import { Injectable } from '@angular/core';
import { User } from '../../models/Users/user.model';
import { TOKEN_ROUTES } from '../../constants/token.routes';
import { CookieService } from '../cookies/cookie.service';


@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor(private cookieService: CookieService) {}

  setTokens(accessToken: string, refreshToken: string): void {
    localStorage.setItem(TOKEN_ROUTES.TOKEN_USER.TOKEN_KEY, accessToken);
    localStorage.setItem(TOKEN_ROUTES.TOKEN_USER.REFRESH_TOKEN_KEY, refreshToken);
  }

  setUserInfo(user: User): void {
    localStorage.setItem(TOKEN_ROUTES.TOKEN_USER.USER_KEY, JSON.stringify(user));
  }

  getUserInfo(): User | null {
    const userStr = localStorage.getItem(TOKEN_ROUTES.TOKEN_USER.USER_KEY);
    return userStr ? JSON.parse(userStr) : null;
  }

  clearAll(): void {
    localStorage.removeItem(TOKEN_ROUTES.TOKEN_USER.TOKEN_KEY);
    localStorage.removeItem(TOKEN_ROUTES.TOKEN_USER.REFRESH_TOKEN_KEY);
    localStorage.removeItem(TOKEN_ROUTES.TOKEN_USER.USER_KEY);
    localStorage.clear();
    this.cookieService.clearCookies();
    window.location.href = 'http://localhost:8000/api/auth/tutor/logout';
  }

  getAccessToken(): string | null {
    return localStorage.getItem(TOKEN_ROUTES.TOKEN_USER.TOKEN_KEY);
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(TOKEN_ROUTES.TOKEN_USER.REFRESH_TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    return !!this.getAccessToken() && !!this.getUserInfo();
  }
}