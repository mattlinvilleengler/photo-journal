import { Component, OnInit, Output, EventEmitter, Input  } from '@angular/core';
import { ListElementComponent } from '../list-element/list-element.component';


@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css'],
  providers: [  ListElementComponent ]
})
export class PhotoListComponent implements OnInit {
  @Output() detailView = new EventEmitter();
  @Input('sortedPhotos') sortedPhotos: any[];
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
   createDetail(photo){
    this.detailView.emit(photo);
  }

}
