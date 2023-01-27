import { Component, OnInit } from '@angular/core';
import { ViewCartService } from './view-cart.service';
import { Cart } from "../models/cart";


@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {

  cart:Cart;

  total:number=0;

  constructor(private viewCartService: ViewCartService) {
    this.cart = new Cart(3);
   }

  ngOnInit(): void {

    this.getCart();

    
  }

  getCart() {
    this.viewCartService.getCart().subscribe(
      (next: any) => {

        next.forEach(element => {
          this.cart.products.push(element.product)
          this.total += parseFloat(element.product.price);
        });
    
      }
    )
  }

}
