import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductoComponent } from './producto/producto.component';
import { ProductsComponent } from './products/products.component';


export const routes: Routes = [
    {path: '', component:ProductsComponent},
    {path : 'product/:id', component : ProductoComponent}
    
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule   
  { }