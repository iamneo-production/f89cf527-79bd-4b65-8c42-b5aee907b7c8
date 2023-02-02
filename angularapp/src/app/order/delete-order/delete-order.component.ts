import { Component, OnInit } from '@angular/core';

import { DeleteOrderService } from './delete-order.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-order',
  templateUrl: './delete-order.component.html',
  styleUrls: ['./delete-order.component.css']
})
export class DeleteOrderComponent  {

  constructor(private deleteOrderService:DeleteOrderService, private snackBar:MatSnackBar) { }

  order:any;


  deleteOrder()
  {
    this.deleteOrderService.deleteOrder(this.order).subscribe((result:any)=>{
        console.log(result);
        this.snackBar.open('Authentication failed!', '❌', {
          horizontalPosition: 'end',
          verticalPosition: 'top',
          duration:1500
        });
    });

  }

}
