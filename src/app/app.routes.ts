import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
    {path: '', component:ProductsComponent},
    {path : 'product/:id', component : ProductoComponent},
    {path : 'cart/:id', component : CartComponent}
    
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule   
  { }