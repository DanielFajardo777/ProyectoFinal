import { Component, OnInit } from '@angular/core';
import { ProductoComponent } from '../producto/producto.component';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MiServicio } from '../../services/fake-store/fake-store.service';
import { FormsModule } from '@angular/forms';
import { map } from 'rxjs';

interface Product {
  id: number;
  title: string,
  price: number,
  category: string,
  description: string,
  image: string
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HttpClientModule,FormsModule ], // Only import HttpClientModule
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers: [HttpClient], // Add HttpClient to providers

})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  products2: any[] = [];
  options : any [] = [
    "All",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
  ];
  category: string = "All";



  constructor(private miServicio: MiServicio, private router: Router) {}
  
  navigateToProductDetails(productId : number){
    this.router.navigate(['product/', productId]);
  }

  ngOnInit(): void {
    this.miServicio.getData().subscribe(data => {
      this.products = data;
      this.products2 = this.products
    });
  }

  uploadedData() {
    console.log(this.products);
  }
  selected(category: string){
    this.productsList(category)
  }
  filterCategory(category: string): Product[] {
    console.log(this.products2)
    const newProduct: Product[] = [];

    for (let index = 0; index < (this.products2.length -1); index++) {
      console.log(this.products2[index].category)
      console.log(category)

      if (this.products2[index].category == category) {
        newProduct.push(this.products2[index])
      }
    }
    console.log(newProduct)
    return newProduct 
  }
  productsList(category: string) {
  
    if (category === 'All') {
      this.miServicio.getData().subscribe(data => {
        this.products = data;
      });
    } else {
      this.products = this.filterCategory(category);
    }
  }

}
