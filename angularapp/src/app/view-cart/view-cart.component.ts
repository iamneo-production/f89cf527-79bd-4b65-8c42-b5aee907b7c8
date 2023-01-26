import { Component, OnInit } from '@angular/core';
import { ViewCartService } from './view-cart.service';


@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {

  cart:any = {};

  constructor(private viewCartService: ViewCartService) { }

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this.viewCartService.getCart().subscribe(
      (next: any) => {
        
        this.cart = next[0];
        console.log(this.cart);
        
      }
    )
  }

}
