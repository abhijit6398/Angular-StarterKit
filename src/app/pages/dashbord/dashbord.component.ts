import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { HttpService } from 'src/app/Service/Http.service'

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css'],
})
export class DashbordComponent {
  gridData!: any
  skillsList!: any
  usersList!: any
  constructor(private apis: HttpService, private route: Router) {}

  ngOnInit() {
    this.apis.todosGetApi().subscribe((res) => {
      this.gridData = res
    })
    this.apis.usersGetApi().subscribe((res) => {
      this.usersList = res
    })
    this.apis.skillsListGetApi().subscribe((res) => {
      this.skillsList = res
    })
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
  }
  onButtonClick() {
    this.route.navigate(['/addrecord'])
  }
}
