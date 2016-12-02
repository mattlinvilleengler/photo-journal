import { Component, OnInit } from '@angular/core';
import { ListElementComponent } from '../list-element/list-element.component';
import { PhotoJournalService  } from '../../services/photo-journal-service.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css'],
  providers: [ PhotoJournalService, ListElementComponent ]
})
export class PhotoListComponent implements OnInit {
  photos: any[];
  list: boolean = true;
  constructor(private PhotoJournalService: PhotoJournalService) { 
  }

  ngOnInit() {
    this.photos = this.PhotoJournalService.getPhotos();
  }
  filterAscending(){
    this.photos = this.PhotoJournalService.sortPhotosAscending(this.photos);    
  }
   filterDescending(){
    this.photos = this.PhotoJournalService.sortPhotosDescending(this.photos);    
  }

}
