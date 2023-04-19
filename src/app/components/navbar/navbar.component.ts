import { Component, ElementRef, EventEmitter, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @ViewChild("anchor", { static: false })
  public anchor!: ElementRef<HTMLElement>;
  public margin = { horizontal: -46, vertical: 7 };
  show :boolean =false;
  public kendokaAvatar = "https://www.telerik.com/kendo-angular-ui-develop/components/navigation/appbar/assets/kendoka-angular.png";

  @Output() toggle: EventEmitter<boolean> = new EventEmitter();

  authentiCated!: boolean;
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
  constructor(private route: Router) { }
  ngDoCheck(): void {
    this.authentiCated = localStorage.getItem('auth') ? true : false;
  }
  onToggle(){
    this.show = !this.show
    this.toggle.emit(this.show);
  }
  signOut() {
    localStorage.removeItem('auth');
    this.route.navigate(['/login']);
  }
  public onSplitButtonItemClick(dataItem: { [key: string]: unknown }): void {
    if (dataItem) {
      switch (dataItem['text']){
        case 'Log Out' : 
          this.signOut();
          break;
        default:
          return;
      }
    }
  }
  

}
