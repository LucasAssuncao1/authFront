import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
          import('./core/components/pages/auth/auth.component').then((m) => m.AuthComponent),
      },
      {
        path: 'admin',
        loadComponent: () =>
          import('./components/admin/pages/admin/admin.component').then((m) => m.AdminComponent),
      },
      {
        path: 'signin',
        loadComponent: () =>
          import('./core/components/pages/signin/signin.component').then((m) => m.SigninComponent),
      }
    ];
