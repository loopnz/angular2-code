import { PriceService,IPriceService } from './price.service';

export class Product {
    price: number;
    service: PriceService;
    constructor(service:IPriceService,price: number) {
        this.price = price;
        this.service = service;
    }
    totalPrice(state: string) {
        return this.service.calculateTotalPrice(this.price, state);
    }
}
