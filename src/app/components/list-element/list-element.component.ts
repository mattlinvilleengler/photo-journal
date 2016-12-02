import { Component, OnInit, Input } from '@angular/core';
import { StarsComponent } from '../stars/stars.component';

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.css'],
  viewProviders: [ StarsComponent ]
})
export class ListElementComponent implements OnInit {
  @Input('photo') photo: any;
  @Input('list') list: boolean;
  detail:boolean =false;
  

  constructor() { }

  ngOnInit() {
    if(this.photo.notes.length > 0){
      this.photo.notes.forEach(n => {
        n.localDate = new Date(n.timestamp).toLocaleDateString();
      })
    }
  }

}
