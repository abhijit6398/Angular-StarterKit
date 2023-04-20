import { Component, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/Service/alert.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnChanges {
  constructor(private route: Router, private alertService : AlertService ) { }
  opened: boolean = false;
  authentiCated!: boolean;

   open(): void {
    this.opened = true;
  }

  closeModal(data: any):void{
    this.opened = data;
  }

  ngDoCheck(): void {
    this.authentiCated = localStorage.getItem('auth') ? true : false;
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

}
