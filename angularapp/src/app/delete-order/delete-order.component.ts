import { Component, OnInit } from '@angular/core';

import { DeleteOrderService } from '../delete-order/delete-order.service';

@Component({
  selector: 'app-delete-order',
  templateUrl: './delete-order.component.html',
  styleUrls: ['./delete-order.component.css']
})
export class DeleteOrderComponent  {

  constructor(private deleteOrderService:DeleteOrderService) { }

  order:any;


  deleteOrder()
  {
    this.deleteOrderService.deleteOrder(this.order).subscribe((result:any)=>{
        console.log(result);
        alert("Successfully Deleted");
    });

  }

}
