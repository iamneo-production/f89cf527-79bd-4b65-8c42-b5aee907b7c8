import { Component, OnInit } from '@angular/core';
import { ViewCartService } from './view-cart.service';
import { Cart } from "../models/cart";
import { Router } from '@angular/router';
import { AddOrderService } from '../add-order/add-order.service';


@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {

  carts:any[];
  total:number=0;

  constructor(
    private viewCartService: ViewCartService,
    private router:Router,
    private addOrderService:AddOrderService
    ) {
    
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
    let order:any = {
      userId:JSON.parse(localStorage.getItem('loggedUser') || "{'loggedUser':null}").id,
      date: new Date(),
      status: "pending",
      products:this.getCartProducts()
    }
    this.addOrderService.addOrder(order).subscribe(
      (next:any)=>{
        console.log(next);
      }
    )
    this.router.navigate(['home/orders']);
  }

  getCartProducts(): any[] {
    let products:any[] = [];
    this.carts.forEach(
      (elem:any) => {
        products.push(elem.product)
      }
    );

    return products;
  }

}
