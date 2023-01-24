import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {Validators} from '@angular/forms';
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
      ordernumber:new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(5)]),
      orderprice:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      orderdate:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      customername:new FormControl(''),
      productname:new FormControl(''),
      quantity:new FormControl(''),
    
      
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
      
    });

  }
  updateOrderFormData(data:any)
  {
    this.orderdata.updateOrders(data).subscribe((result:any)=>{
        console.log(result);
    });

  }
  deleteOrderFormData(id:any)
  {
    this.orderdata.deleteOrders(id).subscribe((result:any)=>{
        console.log(result);
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
