import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StarsComponent } from '../stars/stars.component';

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.css'],
  viewProviders: [ StarsComponent ]
})
export class ListElementComponent implements OnInit {
  @Input('photo') photo: any;
  @Output() detailView = new EventEmitter();
  notesLength: number = 0;

  constructor() { }

  ngOnInit() {
    console.log(this.photo)
    if(this.photo.notes){
      this.notesLength = this.photo.notes.length;
      this.photo.notes.forEach(n => {
        n.localDate = new Date(n.timestamp).toLocaleDateString();
      })
    }
  }
  createDetail(photo){
    this.detailView.emit(photo);
  }

}
