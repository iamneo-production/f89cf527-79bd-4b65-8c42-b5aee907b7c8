import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewReviewService {

  url = "https://8080-ebffcadbcbffbedeadcfdbdaabaca.examlyiopb.examly.io/reviews";
  
  constructor(private http:HttpClient) { }

  getViewReviews()
{

  return this.http.get(this.url)

}
}



