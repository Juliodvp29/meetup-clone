import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _token = signal<string | null>(
    localStorage.getItem('token')
  );

  isLoggedIn = computed(() => !!this._token());

  login(email: string, password: string) {
    const fakeToken = 'fake-jwt-token';

    localStorage.setItem('token', fakeToken);
    this._token.set(fakeToken);
  }

  logout() {
    localStorage.removeItem('token');
    this._token.set(null);
  }

}
