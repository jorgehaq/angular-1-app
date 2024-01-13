import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from './models/product.model';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-1-app';
  http= inject(HttpClient);
  products: Product[]=[];

  changeTitle(){
    this.title="Mi titulo";
  }

  ngOnInit(){
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe((data)=>{
      this.products=data;
    });
  }

}
