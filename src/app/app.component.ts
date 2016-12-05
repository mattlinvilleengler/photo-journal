import { Component, ChangeDetectorRef } from '@angular/core';
import { PhotoListComponent } from '../app/components/photo-list/photo-list.component';
import { PhotoDetailComponent } from './components/photo-detail/photo-detail.component';
import { PhotoJournalService } from './services/photo-journal-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  viewProviders: [PhotoListComponent, PhotoDetailComponent],
  providers: [ PhotoJournalService],


})
export class AppComponent {
  db:any;
  detail: boolean = false;
  reverse: boolean = false;
  show: boolean = true;
  unRatedOnly: boolean = false;
  photoDetail: any = null;
  photos: any[] = [];
  sortedPhotos: any[] = [];
  filterDDL: boolean = false;
  ddShow: boolean = false;
  ddShowFull: boolean = false;

  constructor(private PhotoJournalService: PhotoJournalService, ChangeDetectorRef: ChangeDetectorRef) {
    this.db = PhotoJournalService.getDB();
  }

  ngOnInit() {
    this.getPhotos();
  }
  getPhotos() {
    var me = this;
    this.db.ref('photos/').on('value', function (snapshot) {
      me.photos = me.PhotoJournalService.photoObjectToArray(snapshot.val());
      me.sortedPhotos = me.PhotoJournalService.sortPhotos(me.photos, me.show, me.unRatedOnly, me.reverse);
      me.refresh();
    });
  }
  refresh(){
   document.getElementById('refreshElement').click();
  }
  refreshView(){
    
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
    this.showFilter(false);
    this.show = false;
    this.unRatedOnly = false;
    this.sortedPhotos = this.PhotoJournalService.subSortLists(this.photos, this.show, this.unRatedOnly, this.reverse);
  }
  unRatedPhotos() {
    this.showFilter(false);
    this.show = false;
    this.unRatedOnly = true;
    this.sortedPhotos = this.PhotoJournalService.subSortLists(this.photos, this.show, this.unRatedOnly, this.reverse);
  }
  showAll() {
    this.showFilter(false);
    this.show = true;
    this.unRatedOnly = false;
    this.sortedPhotos = this.PhotoJournalService.subSortLists(this.photos, this.show, this.unRatedOnly, this.reverse);
  }
  closeDetail() {
    this.photoDetail = null;
    this.detail = false;
  }
  showFilter(show) {
    var me = this;
    if (show) {
      me.filterDDL = true;
      setTimeout(function () { me.ddShow = true }, 1)
      setTimeout(function () { me.ddShowFull = true }, 100)
    } else {
      me.ddShowFull = false
      setTimeout(function () { me.ddShow = false }, 1)
      setTimeout(function () { me.filterDDL = false }, 190)
    }
  }
}
