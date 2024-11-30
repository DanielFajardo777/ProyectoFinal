import { Component, input, OnInit } from '@angular/core';
import { MiServicio } from '../fake-store.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

interface Product {
  // Define the properties of a product object based on your API response
  category: string;
  description: string;
  id: string; // Assuming the ID is a string in your API
  image: string;
  price: number;
}

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent implements OnInit{
  idReceived: string = '';
  products: any[] = [];
  productSelected: any;
  constructor(private miServicio: MiServicio,private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.miServicio.getData().subscribe(data => {
      this.products = data;
    });
    this.route.params.subscribe(params => {
      this.idReceived = params['id'];
      console.log(this.idReceived)
    })
    this.productSelected = this.miServicio.getProduct(this.idReceived)

    this.findProductById(this.idReceived)
  }
  findProductById(productId: string): void {
    this.miServicio.getProduct(productId).subscribe(productData => {
      this.productSelected = productData;
      console.log(this.productSelected); // For debugging
    });
  }
}
