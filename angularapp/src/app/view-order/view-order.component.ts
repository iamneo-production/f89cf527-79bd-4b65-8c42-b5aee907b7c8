import { Component, OnInit } from '@angular/core';
import { ViewOrderService } from './view-order.service';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {

  orders:any[]=[];

  constructor(private viewOrdersService:ViewOrderService) { }

  
  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(){
    this.viewOrdersService.getOrders().subscribe(
      (result:any)=>{
     
     this.orders=result;
     console.log(this.orders);
    });

  }
}
