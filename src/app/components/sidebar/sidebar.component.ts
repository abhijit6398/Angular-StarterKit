import { Component, Input } from '@angular/core';
import {
  DrawerItem,
  DrawerItemExpandedFn,
  DrawerSelectEvent,
} from "@progress/kendo-angular-layout";
import {items} from './navList';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() expandable!:boolean;
  public selected = "Inbox";
  public expandedIndices = [2];
  public items: Array<DrawerItem> = items;
  constructor(private route : Router){};
  
  public isItemExpanded: DrawerItemExpandedFn = (item): boolean => {
    return this.expandedIndices.indexOf(item.id) >= 0;
  };

  public onSelect(ev: DrawerSelectEvent): void {
    // this.selected = ev.item.text;
    // const current = ev.item.id;
    // console.log(ev.item.path);
    this.route.navigate([ev.item.path])

    //for child routes

    // if (this.expandedIndices.indexOf(current) >= 0) {
    //   this.expandedIndices = this.expandedIndices.filter(
    //     (id) => id !== current
    //   );
    // } else {
    //   this.expandedIndices.push(current);
    // } 
  }
}
