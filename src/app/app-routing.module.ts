import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ViewProductsComponent } from './view-products/view-products.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
    {path:'/view-products',component : ViewProductsComponent},
    {path:'**',component:LoginComponent}

];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);