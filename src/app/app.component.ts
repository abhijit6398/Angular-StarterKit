import { Component, ViewChild } from '@angular/core';
import { DrawerComponent, DrawerItem, DrawerItemExpandedFn, DrawerSelectEvent } from '@progress/kendo-angular-layout';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(DrawerComponent) sideNav!: DrawerComponent;
  title = 'angular-stater';

  dropDownButtonItems = [
    {
      text: "My Profile",
    },
    {
      text: "Account Settings",
    },
    {
      text: "Support",
    },
    {
      text: "Log Out",
    },
  ];
  item = [
    {
      id:1,
      text: "Home",
      icon: "k-i-home",
      selected: true,
      url: "/dashbord"
    },
    {
      separator: true,
    },
    {
      id:2,
      text: "Users List",
      icon: "k-i-myspace",
      url: "/list"
    },
    {
      text: "Add New User",
      icon: "k-i-file-add",
      id: 3,
      url: "/addrecord"
    },
    {
      text: "User Profile",
      icon: "k-i-user",
      id: 4,
      url: "/profile"
    },

    // {
    //   text: "Notes",
    //   icon: "k-i-edit",
    //   id: 4,
    //   parentId: 3
    // },
    // {
    //   text: "Archive",
    //   icon: "k-i-circle",
    //   id: 5,
    //   parentId: 3
    // },
  ]
  expanded = false;
  sidebarMode:string = 'push';
  items: Array<DrawerItem> = this.item;
  selected = "Home";
  expandedIndices = [2];
  isItemExpanded: DrawerItemExpandedFn = (item): boolean => {
    return this.expandedIndices.indexOf(item.id) >= 0;
  };
  constructor(private observer: BreakpointObserver, private route: Router, private auth: AuthService) { }
  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px']).subscribe((res) => {
      if (res.matches) {
        this.sideNav.mode = 'overlay';
        this.sideNav.mini = false;
        this.sideNav.autoCollapse = true;
        this.sidebarMode='overlay'
      } else {
        this.sideNav.mode = 'push';
        this.sideNav.expanded = true;
        this.sideNav.mini = true;
        this.sideNav.autoCollapse = false;
        this.sidebarMode='push'
      }
    })
  }
  ngOnInit(): void {
    const lastRoute = this.auth.getLastRoute();  
   // const lastRoute = localStorage.getItem('lastRoute');
      if(lastRoute){
        this.route.navigate([lastRoute])
      }else {
        this.route.navigate(['/dashbord'])
      }

    
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        
      

    this.items.filter((item:any):void =>{
      this.route.navigate([ item.text === this.selected && item.url])
    })
  }

  ngOnDestroy(): void {
    const currentRoute = this.route.url; 
    this.auth.setLastRoute(currentRoute);
  }

  handleNotification(){
    console.log("Hello, Notification Clicked")
  }
  toggleExpanded() {
    this.expanded = !this.expanded;
    if (this.expanded) {
      new this.sideNav.expand();
    } else {
      new this.sideNav.collapse();
    }
  }
  onSelect(ev: DrawerSelectEvent): void {
    this.selected = ev.item.text;
    const current = ev.item.id;
    this.item.filter ((x:any):void=>{
      if(current === x?.parentId){
        this.sideNav.autoCollapse = false;
      }else {
        this.observer.observe(['(max-width: 800px']).subscribe(res=>(
          res.matches ? this.sideNav.autoCollapse = true : this.sideNav.autoCollapse = false
        ));
        this.route.navigate([ev.item?.url && ev.item?.url]);
      }
    })
    
    if (this.expandedIndices.indexOf(current) >= 0) {
      this.expandedIndices = this.expandedIndices.filter(
        (id) => id !== current
      );
    } else {
      this.expandedIndices.push(current);
    }
  }
  onSplitButtonItemClick(dataItem: { [key: string]: unknown }): void {
    if (dataItem) {
      switch (dataItem['text']) {
        case 'Log Out':
          console.log("Logout Successfully");
          break;
        default:
          return;
      }
    }
  }
}
