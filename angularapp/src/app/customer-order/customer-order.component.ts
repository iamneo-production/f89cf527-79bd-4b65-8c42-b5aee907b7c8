import { Component, OnInit } from '@angular/core';
import {CustomerOrderService} from './customer-order.service';
@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.css']
})
export class CustomerOrderComponent implements OnInit {

  order:any;
  constructor (private customerorderdata:CustomerOrderService)
  {
    
  }
  ngOnInit()
  {
    this.getCustomerOrders();
  }
 
  getCustomerOrders(){
    this.customerorderdata.CustomerOrder().subscribe((result:any)=>{
      console.log(result);
      this.customerorderdata=result;
    
      
    });

  }

}
