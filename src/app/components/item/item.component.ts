import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  public items:Array<Product>=[];
  
  constructor(private activatedRoute: ActivatedRoute,
    private productService : ProductService,
    private cartService: CartService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      let selectedCategory = params['category'];
      console.log(selectedCategory);

      this.productService.getItems(selectedCategory).subscribe( items => {
        this.items = items[selectedCategory];
      });
    });
  }

}
