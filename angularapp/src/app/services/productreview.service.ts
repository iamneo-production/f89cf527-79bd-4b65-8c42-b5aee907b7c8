import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductreviewService {

  url = "https://8080-dadadbcdabbdffbedeadcfdbdaabaca.examlyiopb.examly.io/reviews";

  constructor(public http:HttpClient) { }

  public getData(){
    return this.http.get(this.url);
  }
}
