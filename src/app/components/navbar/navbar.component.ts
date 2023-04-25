import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ElementRef, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { DrawerComponent } from '@progress/kendo-angular-layout';
import { AlertService } from 'src/app/Service/alert.service';
import { NavbarService } from 'src/app/Service/navbar.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @ViewChild(DrawerComponent) sideNav!: DrawerComponent;
  
  public anchor!: ElementRef<HTMLElement>;
  public margin = { horizontal: -46, vertical: 7 };
  
  public kendokaAvatar = "https://www.telerik.com/kendo-angular-ui-develop/components/navigation/appbar/assets/kendoka-angular.png";
  sidebarMode!:string;
  opened: boolean = false;
  authentiCated!: boolean;
  show :boolean =false;
  expanded!:boolean;
  constructor(private route: Router, private alertService : AlertService,private navService:NavbarService,private observer: BreakpointObserver ) { }
  
  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px']).subscribe((res) => {
      if (res.matches) {
        this.sidebarMode = "overlay";
      }else{
        this.sidebarMode = "push";
      }
    })
  }
  public dropDownButtonItems = [
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
  
  ngDoCheck(): void {
    this.authentiCated = localStorage.getItem('auth') ? true : false;
  }
  onToggle() {
    this.show = !this.show;
    this.navService.toggle(this.show);
  }
  open(): void {
    this.opened = true;
  }
  closeModal(data: any):void{
    this.opened = data;
  }

  ngOnChanges(changes: SimpleChanges) {
    // if (changes['opened']) {
    //   this.opened = changes['opened'].currentValue;
    // }
  }
  handleNotification(){
    console.log("Hello, Notification Clicked")
  }
  
  signOut(data:boolean):void {
    localStorage.removeItem('auth');
    this.opened = data;
    this.route.navigate(['/login']);
    this.alertService.displayNotification({
      msg:'Sign out sucessfull',
      type:'success'
    })
  }
  public onSplitButtonItemClick(dataItem: { [key: string]: unknown }): void {
    if (dataItem) {
      switch (dataItem['text']){
        case 'Log Out' : 
          this.open();
          break;
        default:
          return;
      }
    }
  }
  

}
