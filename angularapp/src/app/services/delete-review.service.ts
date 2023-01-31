import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteReviewService {

  url = "https://8080-ebffcadbcbffbedeadcfdbdaabaca.examlyiopb.examly.io/reviews";

  constructor(private http:HttpClient) { }

  reviews()
  {

    return this.http.get(this.url);
  }

  deleteReviews(data:any)
  {

    return this.http.delete(this.url+"/"+data.id);

  }

}


 

  