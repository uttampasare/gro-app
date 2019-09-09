import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/model/product';
import { Router } from '@angular/router';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  public products:Product[]=[];
  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit() {
    this.productService.getProducts().subscribe( product => {
      this.products = product.categories;
    })
  }

  public onProductSelected(product: Product){
    this.router.navigate(['/items',product.name])
  }

}
