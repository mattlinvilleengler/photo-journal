import { Injectable } from '@angular/core';
declare var firebase: any;

@Injectable()
export class PhotoJournalService {
  database = firebase.database();

  constructor() { }

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
    firebase.database().ref('photos/' + data.UID).set(data);
  }

}
