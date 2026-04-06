import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/pages/home/home').then((m) => m.HomeComponent),
  },
  {
    path: 'events/:id',
    loadComponent: () =>
      import('./features/event/pages/event-detail/event-detail').then((m) => m.EventDetailComponent),
  },
];
