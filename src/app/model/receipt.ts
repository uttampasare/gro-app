import { Product } from './product';
import { User } from './user';

export class Receipt {
    invoiceNumber: string;
    orderDate: Date;
    userInfo: User;
    itemInfo: Product[];
    paymentType?: string;
    referenceId?: string;
    grandTotal:number;


    constructor(invoiceNumber: string,
            orderDate: Date,
            userInfo: User,
            itemInfo: Product[],
            paymentType: string,
            referenceId: string,
            grandTotal : number){
        this.invoiceNumber = invoiceNumber;
        this.orderDate = orderDate;
        this.itemInfo= itemInfo;
        this.userInfo=userInfo;
        this.paymentType=paymentType;
        this.referenceId=referenceId;
        this.grandTotal = grandTotal;
    }
}
