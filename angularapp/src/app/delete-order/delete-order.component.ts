import { Component, OnInit } from '@angular/core';

import { DeleteOrderService } from '../delete-order/delete-order.service';

@Component({
  selector: 'app-delete-order',
  templateUrl: './delete-order.component.html',
  styleUrls: ['./delete-order.component.css']
})
export class DeleteOrderComponent implements OnInit {

  constructor(private orderService:DeleteOrderService) { }

  orders:any;
  ngOnInit(): void {
  }

  deleteOrderFormData(id:any)
  {
    this.orderService.deleteOrders(id).subscribe((result:any)=>{
        console.log(result);
        location.reload();
        alert("Successfully Deleted");
    });

  }

}
