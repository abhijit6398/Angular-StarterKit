import { Component,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-stater';
  auth!:any;
  constructor() { } 
  ngOnInit() {
    this.auth = localStorage.getItem('auth');
  }
  // ngOnChanges(change:SimpleChanges ){
  //   console.log(change,'change')
  //   if(change['auth'].firstChange) return;
  //   this.auth = change['auth'].currentValue;
  // }
  ngDoCheck(){
    this.auth = localStorage.getItem('auth') ? true : false ;
  }
}
