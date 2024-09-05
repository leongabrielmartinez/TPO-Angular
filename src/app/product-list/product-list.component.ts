import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { IProduct } from '../types/types';
import { ApiProductService } from '../services/api-product.service';
import { ProductComponent } from '../product/product.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductComponent, AsyncPipe, CommonModule, FormsModule],
  template: `
    @let productList = (productResult$ | async);

    @if(productList?.length){
      @for(product of productList; track product.id; let i = $index){

      
      <section>
        <img [src]="product?.photo" alt="imagen">
        <div class="textContainer">
          <h3>{{ product?.name }}</h3>

          <p><strong>Descripcion:</strong> {{ product?.description | slice:0:100 }}...</p>

          <p><strong>Precio:</strong> $ {{ product?.price }}</p>  
          

          <button (click)="onProductClicked(product?.id)">Ver detalles</button>
          
        </div>
      </section>}} 
      
      @else {<p>Error 404, servidor caido</p>}
  `,
  styleUrl: './product-list.component.css'
})

export class ProductListComponent implements OnInit {
  textSearch: string = '';
  public productResult$!: Observable<IProduct[]>;
  constructor(private api: ApiProductService, private router: Router) {}
  ngOnInit(): void {
    this.productResult$ = this.api.getAll();
  }
  onProductClicked(id: string | undefined): void {
    this.router.navigate(['/products', id]);
  }
}

