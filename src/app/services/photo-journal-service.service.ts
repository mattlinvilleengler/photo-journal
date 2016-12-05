import { Injectable, Inject } from '@angular/core';
declare var firebase: any;

@Injectable()
export class PhotoJournalService {
  database:any;
  public firebase: any = firebase;
  private config: {} = {
    apiKey: "AIzaSyCHlLQG2iPPGsfgqBvgmQpbLtADzWTyTvY",
    authDomain: "photojournal-3894c.firebaseapp.com",
    databaseURL: "https://photojournal-3894c.firebaseio.com",
    storageBucket: "photojournal-3894c.appspot.com",
    messagingSenderId: "87741841068"
  };
  constructor() { 
      firebase.initializeApp(this.config);
      this.database = firebase.database();
  }
  public getDB(){
    return this.database;
  }
  public sortPhotosAscending(arr) {
    arr.sort(function (a, b) { return b.rating - a.rating });
    return arr;
  }
  public sortPhotosDescending(arr) {
    arr.sort(function (a, b) { return a.rating - b.rating });
    return arr;
  }
  public subSortPhotos(arr) {
    arr.sort(function (a, b) {
      var nameA = a.title.toUpperCase(); // ignore upper and lowercase
      var nameB = b.title.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    });
    return arr;
  }
  public updatePhoto(data) {
    this.database.ref('photos/' + data.UID).set(data);
  }
  photoObjectToArray(photos) {
    var photoArray = [];
    for (var key in photos) {
      photos[key].UID = key;
      photoArray.push(photos[key]);
    }
    photoArray = this.sortPhotosAscending(photoArray);
    return photoArray;
  }
  sortPhotos(PhotoArr, show, unRatedOnly, reverse) {
    var sortedPhotos = this.subSortLists(PhotoArr, show, unRatedOnly, reverse);
    sortedPhotos.forEach(arr => { arr = this.subSortPhotos(arr) });
    return sortedPhotos;
  }
  subSortLists(arr, show, unRatedOnly, reverse) {
    var sorted = [[], [], [], [], [], []];
    arr.forEach(p => {
      if (show) {
        sorted[p.rating].push(p);
      } else if (unRatedOnly) {
        if (p.rating < 1) {
          sorted[p.rating].push(p);
        }
      } else if (!unRatedOnly) {
        if (p.rating > 1) {
          sorted[p.rating].push(p);
        }
      }
    });
    if (!reverse) {
      sorted.reverse();
    }
    return sorted;
  }

}
