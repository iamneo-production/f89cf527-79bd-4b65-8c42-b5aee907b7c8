import { Component, OnInit } from '@angular/core';
import { EditOrderService } from '../edit-order/edit-order.service';
@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {

  constructor(private orderdata:EditOrderService) { }

  ngOnInit(): void {
  }

  editOrderFormData(id:number,orderNumber:string,price:string,date:string,name:string,
    productName:string,
      quantity:string)
  {

    let updatedOrder = {
      id:id,
      ordernumber: orderNumber,
      orderprice: parseFloat(price),
      orderdate:date,
      customername:name,
      productname:productName,
      quantity:parseInt(quantity)
    }

    console.log(updatedOrder);
    
    this.orderdata.editOrders(updatedOrder).subscribe((result:any)=>{
        console.log(result);
        alert("Successfully Updated");
    });

  }
}
