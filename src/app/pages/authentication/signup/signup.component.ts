import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/Service/Http.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  public registerForm: FormGroup = new FormGroup({
    name: new FormControl("",Validators.compose([Validators.required])),
    phnNum: new FormControl("",Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10)])),
    email: new FormControl("",Validators.compose([Validators.required,Validators.email])),
    password: new FormControl("",Validators.compose([Validators.required,Validators.minLength(8)])),
    cnfPassword: new FormControl("",Validators.compose([Validators.required,Validators.minLength(8)]))
  });

  constructor(private apis : HttpService,private route:Router){}

  public submitForm(): void {
    this.registerForm.markAllAsTouched();
    this.apis.usersPostApi(this.registerForm.value).subscribe((res)=>{
      alert("Signup succefully");
      this.route.navigate(['/login']);
      this.registerForm.reset();
    });
  }

  public clearForm(): void {
    this.registerForm.reset();
  }
}
