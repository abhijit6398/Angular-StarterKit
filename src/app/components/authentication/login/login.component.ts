import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/Service/alert.service';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isAuthentication !: boolean;
  loadingPanelVisible:boolean = false;
  constructor( private apis : GlobalService,private http : HttpClient,private router:Router, private alert:AlertService ){}

  public registerForm = new FormGroup({
    email: new FormControl("",Validators.compose([Validators.required,Validators.email])),
    password: new FormControl("",Validators.compose([Validators.required,Validators.minLength(8)]))
  });

  public submitForm(): void {
    this.registerForm.markAllAsTouched();
    this.loadingPanelVisible = true;
    const user = this.apis.usersGetApi().subscribe((res:any)=>{
      if(res.find((x: { email: any; password:any; }) =>x.email === this.registerForm.value.email && x.password === this.registerForm.value.password)){
        this.loadingPanelVisible = false;
        this.alert.displayNotification({type:'success', msg:'user sucessfully logged in....'})
        localStorage.setItem('auth',JSON.stringify(true));
        this.router.navigate(['/pages/dashbord']);
      } else {
        this.loadingPanelVisible = false;
        this.alert.displayNotification({type:'error',msg:'something went wrong'});
      }
    })
  }

  public clearForm(): void {
    this.registerForm.reset();
  }
}
