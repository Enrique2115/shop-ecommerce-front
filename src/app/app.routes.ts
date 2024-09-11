import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from './presentation/layouts/dashboardLayout/dashboardLayout.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'products',
        loadComponent: () =>
          import('./presentation/pages/productPage/productPage.component'),
        data: {
          icon: 'fa-solid fa-store',
          title: 'Product',
          description: 'Product page',
        },
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('./presentation/pages/ordersPage/ordersPage.component'),
        data: {
          icon: 'fa-solid fa-cart-shopping',
          title: 'Cart',
          description: 'Cart page',
        },
      },
      {
        path: 'clients',
        loadComponent: () =>
          import('./presentation/pages/clientPage/clientPage.component'),
        data: {
          icon: 'fa-solid fa-user',
          title: 'Clients',
          description: 'Clients page',
        },
      },
      {
        path: '**',
        redirectTo: 'cart',
        pathMatch: 'full',
      },
    ],
  },
];
