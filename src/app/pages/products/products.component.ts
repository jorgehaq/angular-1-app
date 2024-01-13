import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http'
import { Product } from './../../models/product.model';
import { ProductComponent } from './../../components/product/product.component';


@Component({
  standalone:true,
  imports:[NgFor,ProductComponent],
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  http= inject(HttpClient);
  products: Product[]=[];

  ngOnInit(){
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe((data)=>{
      this.products=data;
    });
  }

}
