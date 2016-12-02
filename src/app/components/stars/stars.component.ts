import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  @Input('stars') stars: any;
  @Input('editable') editable: boolean;
  hoveringIndex = -1;
  starsTotal: any[] = [];

  constructor() { }

  ngOnInit() {
    var starsNum = +this.stars;
    if (starsNum >= 0) {
      for (var i = 0; i < 5; i++) {
        this.starsTotal.push(i < starsNum ? { color: '#666'} : { color: '#efefef'});
      }
    }
  }
  mouseOver(index) {
    if (this.editable) {
      this.hoveringIndex = index;
    }
  }
    mouseOut() {
      this.hoveringIndex = -1;
    }

}
