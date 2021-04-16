import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public products: Product[] = [];

  constructor(
    private readonly _products: ProductsService
  ) { }

  ngOnInit(): void {
    this._products.getProducts().subscribe( data => {
      this.products = data;
    });
  }
}
