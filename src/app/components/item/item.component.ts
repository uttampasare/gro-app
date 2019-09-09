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
  public filteredItems:Array<Product>=[];
  private selectedCategory:string;
  constructor(private activatedRoute: ActivatedRoute,
    private productService : ProductService,
    private cartService: CartService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.selectedCategory = params['category'];
      
      this.productService.getItems(this.selectedCategory).subscribe( items => {
        this.items = items[this.selectedCategory];
        this.filteredItems = this.items;
      });
    });
  }

  public filter(){
    this.filteredItems = this.items.filter( i=> i.provider == 'Big Bazaar');
  }

}
