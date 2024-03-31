import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {toSignal} from "@angular/core/rxjs-interop";

export type Product = {
  description: string;
  image: string
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private API = 'https://fakestoreapi.com/products'
  http = inject(HttpClient)

  $products = toSignal(this.http.get<Array<Product>>(this.API));
}
