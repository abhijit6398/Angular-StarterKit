import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/Service/alert.service';
import { HttpService } from 'src/app/Service/Http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isAuthentication !: boolean;
  loadingPanelVisible:boolean = false;
  constructor( private apis : HttpService,private http : HttpClient,private router:Router, private alert:AlertService ){}

  public registerForm = new FormGroup({
    email: new FormControl("",Validators.compose([Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])),
    password: new FormControl("",Validators.compose([Validators.required,Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]).{8,}$")])),
  });

  public submitForm(): void {
    this.registerForm.markAllAsTouched();
    this.loadingPanelVisible = true;
    const user = this.apis.usersGetApi().subscribe((res:any)=>{
      if(res.find((x: { email: any; password:any; }) =>x.email === this.registerForm.value.email && x.password === this.registerForm.value.password)){
        let data = res.filter((x:any):void => {
          if(x.email === this.registerForm.value.email && x.password === this.registerForm.value.password){
            return x;
          }
        });
        this.loadingPanelVisible = false;
        this.alert.displayNotification({type:'success', msg:'user sucessfully logged in....'})
        localStorage.setItem('auth',JSON.stringify(true));
        localStorage.setItem('details', JSON.stringify(data[0]));
        this.router.navigate(['/dashbord']);
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
