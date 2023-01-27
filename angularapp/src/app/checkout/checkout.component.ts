import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddCartService } from '../add-cart/add-cart.service';
import { ViewProductService } from '../services/view-product.service';




@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartObj = [];
  cartTotalPrice: any;
  pay_type = "cash_on_delivery";
  delivery_address = "";

 
  constructor(private router:Router, private cartService:AddCartService, private productService:ViewProductService) {
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
    
    
  }
  

  
  payment() {
    
    this.router.navigate(['/order']);
  }

}
