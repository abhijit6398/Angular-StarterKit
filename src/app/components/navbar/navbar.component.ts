import { Component,OnChanges, ElementRef, EventEmitter, Output, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/Service/alert.service';
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
  constructor(private route: Router, private alertService : AlertService ) { }
  opened: boolean = false;
  authentiCated!: boolean;
  @Output() toggle: EventEmitter<boolean> = new EventEmitter();

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
  onToggle(){
    this.show = !this.show
    this.toggle.emit(this.show);
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
