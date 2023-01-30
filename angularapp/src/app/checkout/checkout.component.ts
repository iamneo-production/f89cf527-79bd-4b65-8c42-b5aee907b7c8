import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddCartService } from '../add-cart/add-cart.service';
import { AddOrderService } from '../add-order/add-order.service';
import { CustomerOrderService } from '../customer-order/customer-order.service';
import { ViewProductService } from '../services/view-product.service';




@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  @Input() cartProducts:any[] = []
  products: any[] = [];
  
 
  constructor(private router:Router, private orderService:AddOrderService) {
  
  }

  
  
  checkoutForm =new FormGroup(
   {
     email:new FormControl('',[Validators.required,Validators.email]),
     username:new FormControl('',[Validators.required,Validators.pattern('[A-Z a-z]+$')]),
     fname:new FormControl('',[Validators.required]),
     lname:new FormControl('',[Validators.required]),
   });

 get email()
 {
   return this.checkoutForm.get('email');
 }
 get username()
 {
   return this.checkoutForm.get('username');
 }

 get lname()
 {
   return this.checkoutForm.get('lname');
 }
 get fname()
 {
   return this.checkoutForm.get('fname');
 }


  ngOnInit(): void {
    
    this.cartProducts.forEach(element => {
      this.products.push(element.product)
    });
    
  }
  

  
  payment() {
    
    this.router.navigate(['home/orders']);
  }

    submitOrder(){

    let order:any = {
      userId:JSON.parse(localStorage.getItem('loggedUser') || "{'loggedUser':null}").id,
      date: new Date(),
      status: "pending",
      products: this.products

    }

    this.orderService.addOrder(order).subscribe(
      (next:any)=>{
        console.log(next);

      }
    )

    this.router.navigate(['checkout']);
  }

}
