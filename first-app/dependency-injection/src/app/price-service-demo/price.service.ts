export class PriceService {
    constructor() { }

    calculateTotalPrice(price: number, state: String):number {
        const tax = Math.random();
        return price + tax;
    }
}

export interface IPriceService {
    calculateTotalPrice (price:number,state:string):number;
}
