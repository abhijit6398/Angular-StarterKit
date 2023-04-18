import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { GlobalService } from 'src/app/global.service';

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

  constructor(private apis : GlobalService){}

  public submitForm(): void {
    this.registerForm.markAllAsTouched();
    console.log(this.registerForm.value);
    this.apis.usersPostApi(this.registerForm.value).subscribe((res)=>{
      alert("Signup succefully");
      this.registerForm.reset();
    });
  }

  public clearForm(): void {
    this.registerForm.reset();
  }
}
