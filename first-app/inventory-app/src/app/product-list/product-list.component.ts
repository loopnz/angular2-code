import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[];
  @Output() selected: EventEmitter<Product>;
  private currentProduct: Product;
  constructor() {
    this.selected = new EventEmitter();
  }

  selecteProduct(product: Product) {
    this.selected.emit(product);
    this.currentProduct = product;
  }

  isSelected(item) {
    if (item === this.currentProduct) {
      return true;
    }
    return false;
  }

  ngOnInit() {
  }

}
