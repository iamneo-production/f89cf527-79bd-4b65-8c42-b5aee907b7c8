import { Component, OnInit } from '@angular/core';
import { EditOrderService } from '../edit-order/edit-order.service';
@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {

  constructor(private editOrderService:EditOrderService) { }

  ngOnInit(): void {
    this.getOrder();
  }

  order:any;

  getOrder(){
    this.editOrderService.getOrder().subscribe(
      (result:any)=>{
     
     this.order=result;
     console.log(this.order);
    });

  }
  editOrder(id:number,orderNumber:string,price:string,date:string,name:string,
    productName:string,
      quantity:string)
  {

    let editedOrder = {
      id:id,
      ordernumber: orderNumber,
      orderprice: parseFloat(price),
      orderdate:date,
      customername:name,
      productname:productName,
      quantity:parseInt(quantity)
    }

    console.log(editedOrder);
    
    this.editOrderService.editOrder(editedOrder).subscribe((result:any)=>{
        console.log(result);
        alert("Successfully Edited");
    });

  }
}
