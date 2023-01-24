import { Component, OnInit } from '@angular/core';
import { ViewCartService } from './view-cart.service';


@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {

  products:any[] = []

  constructor(private viewCartService: ViewCartService) { }

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this.viewCartService.getCart().subscribe(
      (next: any) => {
        
        next.forEach((element) => {
          console.log(element);
          
          this.products.push(element.product)
        });
      }
    )
  }

}
