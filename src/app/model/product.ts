export class Products{
    categories : Product[]
}

export class Product {
    name: string;
    price:number;
    description?:string;
    provider?:string;
    isAddedToCart?:boolean;
    quantity:number;
    cartQuantity?:number;

    constructor(name:string,price:number,description:string,
        provider:string,cartQuantity?:number){
            this.name=name;
            this.price=price;
            this.description=description;
            this.provider=provider;
            this.cartQuantity = cartQuantity;
    }
}
