import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MiServicio } from './services/fake-store/fake-store.service';
import { HttpClient } from '@angular/common/http';
import { ProductoComponent } from './components/producto/producto.component';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ShopModule } from './modules/shop/shop.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, ProductoComponent,RouterOutlet, HeaderComponent], // Only import HttpClientModule
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
