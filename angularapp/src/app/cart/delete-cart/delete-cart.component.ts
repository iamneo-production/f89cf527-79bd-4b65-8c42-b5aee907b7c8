import { Component, Input, OnInit } from '@angular/core';
import { DeleteCartService } from '../../services/delete-cart.service';

@Component({
  selector: 'app-delete-cart',
  templateUrl: './delete-cart.component.html',
  styleUrls: ['./delete-cart.component.css']
})
export class DeleteCartComponent implements OnInit {

  @Input() cart: any;

  constructor(private deleteCartService: DeleteCartService) { }

  ngOnInit(): void {


  }


  deleteCart() {
    this.deleteCartService.deleteCart(this.cart.id).subscribe((result: any) => {
      console.log(result);
      location.reload();
    });
  }

}
