import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductReviewService {
 

  url="https://8080-ebffcadbcbffbedeadcfdbdaabaca.examlyiopb.examly.io/reviews";

  constructor(private http:HttpClient) { }

  productReviews()
  {

    return this.http.get(this.url);

  }

  getReviews(id:number) {
    return this.http.get(this.url+"/?productId="+id)
   }

}
