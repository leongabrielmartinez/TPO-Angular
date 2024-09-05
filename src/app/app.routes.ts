import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
    {path: 'home', component: ProductListComponent},
    {path: 'products', component: ProductComponent },
    {path: 'products/:id', component: ProductComponent },
    {path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: '**', component: NotFoundComponent},
];


