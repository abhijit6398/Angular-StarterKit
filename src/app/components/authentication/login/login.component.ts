import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isAuthentication !: boolean;
  constructor(private apis : GlobalService,private http : HttpClient,private router:Router){}

  public registerForm: FormGroup = new FormGroup({
    email: new FormControl("",Validators.compose([Validators.required,Validators.email])),
    password: new FormControl("",Validators.compose([Validators.required,Validators.minLength(8)]))
  });

  public submitForm(): void {
    this.registerForm.markAllAsTouched();
    const user = this.apis.usersGetApi().subscribe((res:any)=>{
      if(res.find((x: { email: any; password:any; }) =>x.email === this.registerForm.value.email && x.password === this.registerForm.value.password)){
        localStorage.setItem('auth',JSON.stringify(true));
        this.router.navigate(['/pages/dashbord']);
      }
    })
  }

  public clearForm(): void {
    this.registerForm.reset();
  }
}
