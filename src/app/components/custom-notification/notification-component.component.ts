import { Component, Input } from '@angular/core';

@Component({
  templateUrl: './notification-component.component.html',
  styleUrls: ['./notification-component.component.css']
})
export class NotificationComponentComponent {
@Input()msg:string = '';
}
