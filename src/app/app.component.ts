import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MiServicio } from './fake-store.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule], // Only import HttpClientModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpClient], // Add HttpClient to providers

})
export class AppComponent implements OnInit {
  products: any[] = [];

  constructor(private miServicio: MiServicio) {}

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