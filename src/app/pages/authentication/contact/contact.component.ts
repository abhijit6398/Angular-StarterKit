import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/Service/alert.service';
import { HttpService } from 'src/app/Service/Http.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  private contactPostSubscription!: Subscription;
  constructor(private apis: HttpService, private alert: AlertService) {}
  contactusForm = new FormGroup({
    name: new FormControl('', Validators.compose([Validators.required])),
    email: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ])
    ),
    description: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(20)])
    ),
  });
  submitForm(): void {
    this.contactPostSubscription = this.apis
      .contactPostApi(this.contactusForm.value)
      .subscribe(() => {
        this.alert.displayNotification({
          type: 'success',
          msg: 'Submitted Your Response....',
        });
      });
  }
  // ngOnDestroy() {
  //   if (this.contactPostSubscription) {
  //     this.contactPostSubscription.unsubscribe();
  //   }
  // }
}
