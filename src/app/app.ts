import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RouterOutlet, Router } from '@angular/router';
import { HeaderComponent } from "./shared/layout/header/header";
import { AuthService } from '@/app/core/services/auth';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, CardModule, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  auth = inject(AuthService);
  router = inject(Router);

  get showHeader(): boolean {
    return this.auth.isLoggedIn() || !this.router.url.includes('/login');
  }
}
