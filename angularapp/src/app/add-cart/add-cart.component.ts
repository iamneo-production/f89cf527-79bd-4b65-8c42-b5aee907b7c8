import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddCartService } from './add-cart.service';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.css']
})
export class AddCartComponent implements OnInit {

  @Input() product: any;

  constructor(private addCartService: AddCartService, private snackBar:MatSnackBar) {

  }

  ngOnInit(): void { }

  addToCart() {

    let cart = {
      userId: JSON.parse(localStorage.getItem('loggedUser')).id,
      product: this.product
    }

    this.addCartService.addToCart(cart).subscribe(
      (next: any) => {
        console.log(next);

        this.snackBar.open('Product added to cart!', '✅', {
          horizontalPosition: 'end',
          verticalPosition: 'top',
          duration:1500
        });


      }
    )
  }

}
