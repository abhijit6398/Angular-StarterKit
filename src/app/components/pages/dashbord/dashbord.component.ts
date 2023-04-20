import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {
  gridData!: any;
  constructor(private apis: GlobalService,private route : Router) { }
  ngOnInit() {
    this.apis.todosGetApi().subscribe((res) => {
      this.gridData = res;
    });
  }
  onButtonClick(){
    this.route.navigate(['/pages/addrecord'])
  }
}
