import { Component, OnInit } from '@angular/core';
import { ViewCartService } from './view-cart.service';
import { Cart } from "../models/cart";
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {

  carts:any[];
  total:number=0;

  constructor(private viewCartService: ViewCartService, private router:Router) {
    
   }

  ngOnInit(): void {

    this.getCart();

    
  }

  getCart() {
    this.viewCartService.getCart().subscribe(
      (next: any) => {

        this.carts = next;
        next.forEach((element:any) => {
          this.total += parseInt(element.product.price)
        });
        
    
      }
    )
  }

  placeOrder(){
    this.router.navigate(['home/checkout'])
  }

}
