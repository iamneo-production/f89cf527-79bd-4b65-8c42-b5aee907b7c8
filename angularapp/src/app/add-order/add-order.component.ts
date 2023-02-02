import { Component, Input, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {Validators} from '@angular/forms';
import { AddOrderService } from '../add-order/add-order.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent {

  @Input() order:any;


  constructor (private addOrderService:AddOrderService, private snackBar:MatSnackBar)
  {
    
  }
  
  addOrder()
  {
    this.addOrderService.addOrder(this.order).subscribe((result:any)=>{
      console.log(result);
      this.snackBar.open('Order added!', '✅', {
        horizontalPosition: 'end',
        verticalPosition: 'top',
        duration:1500
      }); 
    });

  }
}
