import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StarsComponent } from '../stars/stars.component';
import { PhotoJournalService } from '../../services/photo-journal-service.service';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css'],
  viewProviders: [ StarsComponent ]
})
export class PhotoDetailComponent implements OnInit {
  @Input('photo') photo: any;
  @Output() closeDetailView = new EventEmitter();

  detail:boolean =false;
  fullScrean:boolean =false;

  constructor(private PhotoJournalService: PhotoJournalService) {
  }

  ngOnInit() {
    var me = this;
    setTimeout(function(){me.detail = true;},1);
    this.fullScrean = false;
  }
  closeDetail(){
    this.detail = false;
    this.fullScrean = false;
    this.closeDetailView.emit();

  }

}

