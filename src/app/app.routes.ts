import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from './presentation/layouts/dashboardLayout/dashboardLayout.component';
import ProductPageComponent from './presentation/pages/productPage/productPage.component';

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
        path: 'products/create',
        loadComponent: () =>
          import(
            './presentation/pages/productCreatePage/productCreatePage.component'
          ),
      },
      {
        path: 'products/edit/:id',
        loadComponent: () =>
          import(
            './presentation/pages/productEditPage/productEditPage.component'
          ),
      },
      {
        path: 'orders',
        loadComponent: () =>
          import('./presentation/pages/ordersPage/ordersPage.component'),
        data: {
          icon: 'fa-solid fa-cart-shopping',
          title: 'Cart',
          description: 'Cart page',
        },
      },
      {
        path: 'orders/create',
        loadComponent: () =>
          import(
            './presentation/pages/orderCreatePage/orderCreatePage.component'
          ),
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
        path: 'clients/create',
        loadComponent: () =>
          import(
            './presentation/pages/clientCreatePage/clientCreatePage.component'
          ),
      },
      {
        path: '**',
        redirectTo: 'orders',
        pathMatch: 'full',
      },
    ],
  },
];
