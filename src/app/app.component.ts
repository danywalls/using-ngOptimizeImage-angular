import {Component, inject} from '@angular/core';
import {ProductsService} from "./services/products.service";
import {NgOptimizedImage} from "@angular/common";


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    NgOptimizedImage
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent {

  $products = inject(ProductsService).$products;

}
