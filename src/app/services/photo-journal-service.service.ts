import { Injectable } from '@angular/core';

@Injectable()
export class PhotoJournalService{

  constructor() { }

  public  getPhotos(){
    return this.photos;
  }
    public  sortPhotosAscending(arr){
      arr.sort(function(a, b){return b.rating-a.rating});
      return arr;
  }
   public  sortPhotosDescending(arr){
      arr.sort(function(a, b){return a.rating-b.rating});
      return arr;
  }

  photos: any =
  [
    {
      "url": "https://source.unsplash.com/H_M4dX_F1LQ/",
      "title": "A Puffin",
      "notes": [{ "timestamp": 1480377984598, "text": "This puffin looks rather stoic." }, { "timestamp": 1479801600000, "text": "This is an Atlantic Puffin." }],
      "rating": 5
    },
    {
      "url": "https://source.unsplash.com/_snqARKTgoc/",
      "title": "Interpid Bears",
      "notes": [],
      "rating": 4
    },
    {
      "url": "https://source.unsplash.com/14CsAc1hY1c/",
      "title": "",
      "notes": [],
      "rating": 0

    },
    {
      "url": "https://source.unsplash.com/t20pc32VbrU/",
      "title": "A Breaching Whale",
      "notes": [],
      "rating": 3
    },
    {
      "url": "https://source.unsplash.com/6UNL6Ghn_c/",
      "title": "",
      "notes": [],
      "rating": 0
    },
    {
      "url": "https://source.unsplash.com/ZnmrTUzFIks/",
      "title": "",
      "notes": [],
      "rating": 0
    },
    {
      "url": "https://source.unsplash.com/Vt0tkNf6r5Y/",
      "title": "",
      "notes": [],
      "rating": 0
    },
    {
      "url": "https://source.unsplash.com/3r0Kchy-F_A/",
      "title": "",
      "notes": [{ "timestamp": 1479456000000, "text": "This is very yellow." }],
      "rating": 1
    },
    {
      "url": "https://source.unsplash.com/7YfY61ILEwg/",
      "title": "The Deadliest Frog",
      "notes": [{ "timestamp": 1476946800000, "text": "Spotted in the forest." }, { "timestamp": 1477292400000, "text": "I think these are native to Columbia." }, { "timestamp": 1477378800000, "text": "This is a golden poison frog and should never be touched." }],
      "rating": 1
    },
    {
      "url": "https://source.unsplash.com/xqjO-lx39B4/",
      "title": "not a yak",
      "notes": [],
      "rating": 2
    }
  ];


}
