import { Component, OnInit, AfterViewInit, Output, EventEmitter, Input } from '@angular/core';
import { ListElementComponent } from '../list-element/list-element.component';


@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css'],
  providers: [ListElementComponent]
})
export class PhotoListComponent implements OnInit {
  @Output() detailView = new EventEmitter();
  @Input('sortedPhotos') sortedPhotos: any[];
  missingCount: number = 0;
  isOdd: boolean = false;
  rating: {} = {
    0: "Unrated Photos",
    1: "1 Star Photos",
    2: "2 Star Photos",
    3: "3 Star Photos",
    4: "4 Star Photos",
    5: "5 Star Photos"
  }
  ngOnInit() {
  }
  ngOnChanges() {
    if (this.sortedPhotos) {
      this.missingCount = this.count(this.sortedPhotos);
      this.isOdd = this.odd(this.missingCount, this.sortedPhotos);
    }
  }
  createDetail(photo) {
    this.detailView.emit(photo);
  }
  odd(n, x) {
    var int = (x.length - n - 1) % 2;
    return int ? true : false;
  }
  count(arr) {
    var me = this;
    var c = 0;
    arr.forEach(ar => {
      if (ar.length < 1) {
        c++;
      }
    })
    return c;
  }

}
