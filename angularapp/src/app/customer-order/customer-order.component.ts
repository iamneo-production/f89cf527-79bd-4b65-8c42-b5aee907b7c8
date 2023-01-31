import { Component, OnInit } from '@angular/core';
import {CustomerOrderService} from './customer-order.service';
@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.css']
})
export class CustomerOrderComponent implements OnInit {

  orders:any[] = [];
  total: number = 0;
  constructor (private customerOrderService:CustomerOrderService)
  {
    
  }
  ngOnInit()
  {
    this.getCustomerOrders();
  }
 
  getCustomerOrders(){
    let user = JSON.parse(localStorage.getItem('loggedUser') || '{loggedUser:null}')

    this.customerOrderService.getCustomerOrders(user.id).subscribe((result:any)=>{
      console.log(result);
      this.orders = result;
      this.orders.forEach((order:any) => {
        order.products.forEach((product:any) => {
          this.total += parseInt(product.price)
        });
      });
    
      
    });

  }

}
