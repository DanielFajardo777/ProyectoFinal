import { Component, OnInit } from '@angular/core';
import { ProductoComponent } from '../producto/producto.component';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MiServicio } from '../fake-store.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HttpClientModule], // Only import HttpClientModule
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers: [HttpClient], // Add HttpClient to providers

})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  constructor(private miServicio: MiServicio, private router: Router) {}
  
  navigateToProductDetails(productId : number){
    this.router.navigate(['product/', productId]);
  }

  ngOnInit(): void {
    this.miServicio.getData().subscribe(data => {
      this.products = data;
    });
  }

  uploadedData() {
    console.log(this.products);
  }
}
