import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from '../add-product/add-product.component';
import { ViewProductService } from '../services/view-product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent  {
  products:any;
  name: any;
  animal: any;
  constructor(private viewproductService: ViewProductService, public dialog:MatDialog) {
    viewproductService.products().subscribe((data:any)=>
    {
      this.products=data;
    })
   }

   ngOnInit(){
    
   }
  
   openDialog(): void {
    const dialogRef = this.dialog.open(AddProductComponent,{width: '450px', height:'90vh'});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
