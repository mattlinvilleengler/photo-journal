import { Component } from '@angular/core';
import { PhotoListComponent } from '../app/components/photo-list/photo-list.component';
import { PhotoDetailComponent } from './components/photo-detail/photo-detail.component';
import { PhotoJournalService } from './services/photo-journal-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  viewProviders: [PhotoListComponent, PhotoDetailComponent]

})
export class AppComponent {
  detail: boolean = false;
  reverse: boolean = false;
  show: boolean = true;
  unRatedOnly: boolean = false;
  photoDetail: any = null;
  photos: any[];
  sortedPhotos: any[];

  constructor(private PhotoJournalService: PhotoJournalService) {
  }

  ngOnInit() {
    this.mainPhotos();
  }
  mainPhotos() {
    this.photos = this.PhotoJournalService.getPhotos();
    this.photos = this.filterAscending(this.photos);
    this.sortedPhotos = this.subSortLists(this.photos);
  }
  subSortLists(arr) {
    var sorted = [[], [], [], [], [], []];
    arr.forEach(p => {
      if (this.show) {
        sorted[p.rating].push(p);
      } else if (this.unRatedOnly) {
        if (p.rating < 1) {
          sorted[p.rating].push(p);
        }
      } else if (!this.unRatedOnly) {
        if (p.rating > 1) {
          sorted[p.rating].push(p);
        }
      }
    });
    if(!this.reverse){
      sorted.reverse();
    }
    return sorted;
  }
  filterAscending(arr) {
    return this.PhotoJournalService.sortPhotosAscending(arr);
  }
  filterDescending(arr) {
    return this.PhotoJournalService.sortPhotosDescending(arr);
  }
  createDetail(photo) {
    this.photoDetail = photo;
    this.detail = true;
  }
  reversePhotos() {
    this.reverse = !this.reverse;
    this.sortedPhotos.reverse();
  }
  ratedPhotos() {
    this.show = false;
    this.unRatedOnly = false;
    this.sortedPhotos = this.subSortLists(this.photos);
  }
  unRatedPhotos() {
    this.show = false;
    this.unRatedOnly = true;
    this.sortedPhotos = this.subSortLists(this.photos);
  }
  showAll() {
    this.show = true;
    this.unRatedOnly = false;
    this.sortedPhotos = this.subSortLists(this.photos);
  }
  closeDetail() {
    this.photoDetail = null;
    this.detail = false;
  }
}
