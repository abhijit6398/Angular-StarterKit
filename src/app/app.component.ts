import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-stater';
  expandable!:boolean;
  toggle(toggle:boolean){
    this.expandable = toggle;
  }
}
