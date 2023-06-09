import { Component, Input, ViewChild } from '@angular/core'
import {
  DrawerComponent,
  DrawerItem,
  DrawerItemExpandedFn,
  DrawerSelectEvent,
} from '@progress/kendo-angular-layout'
import { items } from './navList'
import { Router } from '@angular/router'
import { BreakpointObserver } from '@angular/cdk/layout'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @ViewChild(DrawerComponent) sideNav!: DrawerComponent
  @Input() auth: any;

  public selected = 'Inbox'
  public expandedIndices = [2]
  public items: Array<DrawerItem> = items
  sidebarMode: string = 'push'
  isItemExpanded: DrawerItemExpandedFn = (item): boolean => {
    return this.expandedIndices.indexOf(item.id) >= 0
  }
  constructor(private route: Router, private observer: BreakpointObserver) {}

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sideNav.mode = 'overlay'
        this.sideNav.expanded = false
        this.sideNav.mini = false
        this.sideNav.autoCollapse = true
        this.sidebarMode = 'overlay'
      } else {
        this.sideNav.mode = 'push'
        this.sideNav.expanded = true
        this.sideNav.mini = true
        this.sideNav.autoCollapse = false
        this.sidebarMode = 'push'
      }
    })
  }

  onSelect(ev: DrawerSelectEvent): void {
    this.selected = ev.item.text
    const current = ev.item.id
    this.items.filter((x: any): void => {
      if (current === x?.parentId) {
        this.sideNav.autoCollapse = false
      } else {
        this.observer
          .observe(['(max-width: 800px)'])
          .subscribe((res) =>
            res.matches
              ? (this.sideNav.autoCollapse = true)
              : (this.sideNav.autoCollapse = false),
          )
        this.route.navigate([ev.item?.url && ev.item?.url])
      }
    })

    if (this.expandedIndices.indexOf(current) >= 0) {
      this.expandedIndices = this.expandedIndices.filter((id) => id !== current)
    } else {
      this.expandedIndices.push(current)
    }
  }
}
