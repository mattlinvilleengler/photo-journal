import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { StarsComponent } from '../stars/stars.component';
import { PhotoJournalService } from '../../services/photo-journal-service.service';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css'],
  viewProviders: [StarsComponent]
})
export class PhotoDetailComponent implements OnInit {
  @Input('photo') photo: any;
  @Output() closeDetailView = new EventEmitter();
  noteText: string = "";
  addNote: boolean = false;
  detail: boolean = false;
  fullScrean: boolean = false;
  editTitle: boolean = false;

  constructor(private PhotoJournalService: PhotoJournalService) {
  }

  ngOnInit() {
    var me = this;
    setTimeout(function () { me.detail = true; }, 1);
    this.fullScrean = false;
  }
  ngOnChanges() {
    if (!this.photo.title) {
      this.photo.title = "";
    }
  }
  closeDetail() {
    this.detail = false;
    this.fullScrean = false;
    this.closeDetailView.emit();
  }
  updateRating(rating) {
    this.photo.rating = rating;
    this.PhotoJournalService.updatePhoto(this.photo);
  }
  updateTitle(){
    this.PhotoJournalService.updatePhoto(this.photo);
    this.editTitle = false;
  }
  updateNote() {
    if (this.noteText.length > 0) {
      if (!this.photo.notes) {
        this.photo.notes = [];
      }
      this.photo.notes.push(
        {
          text: this.noteText,
          timestamp: new Date().getTime(),
          localDate: new Date().toLocaleDateString()
        })
      this.PhotoJournalService.updatePhoto(this.photo);
      this.noteText = "";
      this.addNote = false;
    }
  }
  removeNote(i) {
    this.photo.notes.splice(i, 1);
    this.PhotoJournalService.updatePhoto(this.photo);
  }
  showAddNote() {
    this.addNote = true;
    setTimeout(function () {
      document.getElementById('noteTextInput').focus();
    }, 20)
  }
  showChangeTitle() {
    this.editTitle = true;
    setTimeout(function () {
      document.getElementById('textTitle').focus();
    }, 20)
  }


}

