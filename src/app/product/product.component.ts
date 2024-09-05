import { Component, inject, Input, OnInit } from '@angular/core';
import { IProduct } from '../types/types';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApiProductService } from '../services/api-product.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  template: `
      @let product = (productObservable$ | async);
      @if(!product){
        <p>Loading...</p>
      }@else {
        <section>
        <img [src]="product?.photo" alt="imagen">
        <div class="textContainer">
        <h3>{{ product.name }}</h3>

        <p><strong>Descripcion:</strong> {{ product?.description }}</p>

        <p><strong>Precio:</strong> $ {{ product?.price }}</p>  
        <button>Comprar 🛒</button>
          </div>
        </section>
    }
  `,
  styleUrl: './product.component.css'
})

  
export class ProductComponent  implements OnInit {
    @Input() id!: string; 
    public productObservable$!: Observable<IProduct>;
    private api: ApiProductService = inject(ApiProductService);
    ngOnInit(): void {
      this.productObservable$ = this.api.getOne(this.id);
    }}




