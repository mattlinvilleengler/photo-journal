import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {  PhotoListComponent } from './components/photo-list/photo-list.component';
import {  ListElementComponent } from './components/list-element/list-element.component';
import { PhotoJournalService  } from './services/photo-journal-service.service';
import { StarsComponent } from './components/stars/stars.component';
import { PhotoDetailComponent } from './components/photo-detail/photo-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    PhotoListComponent,
    ListElementComponent,
    StarsComponent,
    PhotoDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ PhotoJournalService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
