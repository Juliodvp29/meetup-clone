import { AuthService } from '@/app/core/services/auth';
import { Component, effect, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-login',
  imports: [FormsModule, InputTextModule, ButtonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  private auth = inject(AuthService);
  private router = inject(Router);

  email = '';
  password = '';

  constructor() {
    effect(() => {
      if (this.auth.isLoggedIn()) {
        this.router.navigate(['/']);
      }
    });
  }

  login() {
    this.auth.login(this.email, this.password);
    this.router.navigate(['/']);
  }
}
