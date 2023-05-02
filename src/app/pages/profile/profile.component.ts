import { Component } from '@angular/core'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent { 
  public profileData: any = localStorage.getItem('details')
  constructor() {
    console.log(JSON.parse(this.profileData).name, 'name')
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.profileData = JSON.parse(this.profileData)
  }
}
