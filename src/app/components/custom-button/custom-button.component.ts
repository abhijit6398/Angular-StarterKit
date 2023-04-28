import { Component, Input } from '@angular/core';
import { ButtonThemeColor } from '@progress/kendo-angular-buttons';

@Component({
  selector: 'CustomButton',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent {
@Input() demo : string = "";
@Input() ButtonName: string = "";
@Input() themeColor: ButtonThemeColor = 'primary';
@Input() customStyle: string = "col-md-5 col-12 col-lg-5 col-sm-12 col-xs-12"
}
