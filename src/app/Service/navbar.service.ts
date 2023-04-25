import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  expandable:boolean=false;
  mode:string='push';
  constructor() { }
  toggle(toggle:boolean){
    this.expandable = toggle;
  }
  handleMode(data:string) {
    this.mode = data;
  }
}
