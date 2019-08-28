import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, Products } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  public getProducts(){
    return this.httpClient.get<Products>('../../assets/mocks/categories.json');
  }

  public getItems(category:string){
    return this.httpClient.get('../../assets/mocks/items.json');
  }
}
