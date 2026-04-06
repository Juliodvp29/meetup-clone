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
  path: 'dashboard',
  canActivate: [authGuard],
  loadComponent: () =>
    import('./features/dashboard/pages/dashboard/dashboard')
      .then(m => m.DashboardComponent)
}
];
