import { Component } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { Product } from './product/product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];

  constructor() {
    const p1 = new Product('1a', '2d', 'http:\/\/', ['a', 'b'], 10);
    const p2 = new Product('1a', '2d', 'http:\/\/', ['a', 'b'], 10);
    const p3 = new Product('1a', '2d', 'http:\/\/', ['a', 'b'], 10);
    const p4 = new Product('1a', '2d', 'http:\/\/', ['a', 'b'], 10);
    const p5 = new Product('1a', '2d', 'http:\/\/', ['a', 'b'], 10);
    this.products = [p1, p2, p3, p4, p5];
  }

  productSelected(product: Product) {

    const control = new FormControl('name');
    console.log(control);
    const group = new FormGroup({
      name: new FormControl('tom'),
      age: new FormControl('age')
    });
    console.log(group);
  }

}
