import { Component, Input, OnInit } from '@angular/core';
import { AddOrderService } from '../add-order/add-order.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent {

  @Input() order:any;


  constructor (private addOrderService:AddOrderService)
  {
    
  }
  
  addOrder()
  {
    this.addOrderService.addOrder(this.order).subscribe((result:any)=>{
      console.log(result);
      alert("Successfully Added");     
    });

  }
}
