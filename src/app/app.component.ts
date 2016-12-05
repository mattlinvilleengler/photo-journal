import { Component } from '@angular/core';
import { PhotoListComponent } from '../app/components/photo-list/photo-list.component';
import { PhotoDetailComponent } from './components/photo-detail/photo-detail.component';
import { PhotoJournalService } from './services/photo-journal-service.service';
declare var firebase: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  viewProviders: [PhotoListComponent, PhotoDetailComponent]

})
export class AppComponent {
  database = firebase.database();
  detail: boolean = false;
  reverse: boolean = false;
  show: boolean = true;
  unRatedOnly: boolean = false;
  photoDetail: any = null;
  photos: any[] = [];
  sortedPhotos: any[];
  filterDDL: any = false;
  ddShow: boolean = false;
  ddShowFull: boolean = false;


  constructor(private PhotoJournalService: PhotoJournalService) {
  }

  ngOnInit() {
    // this.PhotoJournalService.doStuff();
    this.getPhotos();
  }
  mainPhotos(photos) {
    this.photos = [];
    for (var key in photos) {
      photos[key].UID = key;
      this.photos.push(photos[key]);
    }
    this.photos = this.filterAscending(this.photos);
    this.sortedPhotos = this.subSortLists(this.photos);
    console.log(this.sortedPhotos)
    this.sortedPhotos.forEach(arr => { arr = this.PhotoJournalService.subSortPhotos(arr) });
    console.log(this.sortedPhotos)

  }
  getPhotos() {
    var me = this;
    firebase.database().ref('photos/').on('value', function (snapshot) {
      me.mainPhotos(snapshot.val());
    });
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
    if (!this.reverse) {
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
