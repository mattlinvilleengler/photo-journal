import { Component } from '@angular/core';
import { PhotoListComponent } from '../app/components/photo-list/photo-list.component';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  viewProviders: [ PhotoListComponent ] 

})
export class AppComponent {
  title = 'app works!';
}
