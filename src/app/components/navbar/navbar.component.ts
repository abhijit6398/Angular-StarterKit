import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  authentiCated!: boolean;
  constructor(private route: Router) { }
  ngDoCheck(): void {
    console.log("call doCheck");
    this.authentiCated = localStorage.getItem('auth') ? true : false;
  }

  signOut() {
    localStorage.removeItem('auth');
    this.route.navigate(['/login']);
  }

}
