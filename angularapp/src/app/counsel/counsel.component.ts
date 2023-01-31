import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counsel',
  templateUrl: './counsel.component.html',
  styleUrls: ['./counsel.component.css']
})
export class CounselComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/1400/200`);

  constructor() { }

  ngOnInit(): void {
  }

}
