import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MiServicio } from './fake-store.service';
import { HttpClient } from '@angular/common/http';
import { ProductoComponent } from './producto/producto.component';
import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, ProductoComponent,RouterOutlet], // Only import HttpClientModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpClient], // Add HttpClient to providers

})
export class AppComponent implements OnInit {
  products: any[] = [];

  constructor(private miServicio: MiServicio, private router: Router) {}
  
  navigateToProductDetails(productId : number){
    this.router.navigate(['product/', productId]);
  }

  ngOnInit(): void {
    this.miServicio.getData().subscribe(data => {
      this.products = data;
    });
    this.uploadedData();
    }

  uploadedData() {
    console.log(this.products);
  }
}
