import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-textarea',
  templateUrl: './custom-textarea.component.html',
  styleUrls: ['./custom-textarea.component.css']
})
export class CustomTextareaComponent {
  @Input() label:string = '';
}
