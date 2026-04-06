import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/pages/home/home').then((m) => m.HomeComponent),
  },
  {
    path: 'events/:id',
    loadComponent: () =>
      import('./features/event/pages/event-detail/event-detail').then(
        (m) => m.EventDetailComponent,
      ),
  },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/pages/login/login').then((m) => m.LoginComponent),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./features/profile/pages/profile/profile').then((m) => m.ProfileComponent),
    canActivate: [authGuard],
  },
];
