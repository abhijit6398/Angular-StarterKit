import { Component, Input } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent {
  @Input() label:string = '';
  @Input() type:string = '';
  @Input() inputId:string = '';
  @Input() control = new FormControl();
  @Input() hint:string ='';
  @Input() error:string = '';
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.label, this.type);
  }
}
