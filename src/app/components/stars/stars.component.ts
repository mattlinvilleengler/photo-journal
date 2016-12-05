import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  @Input('stars') stars: any;
  @Input('editable') editable: boolean;
  @Output() updateRating = new EventEmitter();
  hoveringIndex = -1;
  starsTotal: any[] = [];

  constructor() { }

  ngOnInit() {
    this.updateStars();
  }
  updateStars(){
    var starsNum = +this.stars;
    this.starsTotal = [];
    if (starsNum >= 0) {
      for (var i = 0; i < 5; i++) {
        this.starsTotal.push(i < starsNum ? { color: '#666'} : { color: 'rgba(250,250,250,1)'});
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
    update(i){
      i++;
      this.stars = i;
      this.updateStars();
      this.updateRating.emit(i);
    }

}
