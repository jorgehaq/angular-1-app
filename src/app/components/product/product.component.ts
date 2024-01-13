import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import { Product } from '../../models/product.model'

@Component({
  standalone:true,
  imports:[NgIf,NgOptimizedImage],
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product!:Product;
  @Input() title:string='';
}
