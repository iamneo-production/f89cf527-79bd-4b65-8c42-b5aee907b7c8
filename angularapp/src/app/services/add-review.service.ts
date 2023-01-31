import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AddReviewService {

  url = "https://8080-ebffcadbcbffbedeadcfdbdaabaca.examlyiopb.examly.io/reviews";

  constructor(private http:HttpClient) { }

  
  addReviews(data:any)
  {
    return this.http.post(this.url, data.id);
  }

  alert("Review submitted.");
  
}
 

 