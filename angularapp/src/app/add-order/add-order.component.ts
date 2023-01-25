import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';

import { AddOrderService } from '../add-order/add-order.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  orders:any;


  orderForm=new FormGroup(
    {
      orderprice:new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(10)]),
      orderdate:new FormControl('',[Validators.required,Validators.pattern("[yyyy/mm/dd or dd-mm-yyyy]+$")]),
      customername:new FormControl('',[Validators.required,Validators.pattern("[A-Z a-z]+$")]),
      productname:new FormControl('',[Validators.required,Validators.pattern("[A-Z a-z]+$")]),
      quantity:new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(5)]),
    
      
    });
  constructor (private orderdata:AddOrderService)
  {
    
  }
  ngOnInit()
  {
    
  }
 
  
  addOrderFormData(data:any)
  {
    this.orderdata.saveOrders(data).subscribe((result:any)=>{
      console.log(result);
      alert("Successfully Added");
      this.orderForm.reset();
       
    });

  }
  

  get ordernumber()
  {
    return this.orderForm.get('ordernumber');
  }
  get orderprice()
  {
    return this.orderForm.get('orderprice');
  }

  get orderdate()
  {
    return this.orderForm.get('orderdate');
  }
  get customername()
  {
    return this.orderForm.get('customername');
  }
  get productname()
  {
    return this.orderForm.get('productname');
  }
  get quantity()
  {
    return this.orderForm.get('quantity');
  }
 
}
