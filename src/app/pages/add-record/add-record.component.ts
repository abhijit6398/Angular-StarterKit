import { Component, ViewChild } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { FormBuilder } from '@angular/forms'
import { HttpService } from 'src/app/Service/Http.service';
import { AlertService } from 'src/app/Service/alert.service';
@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css'],
})
export class AddRecordComponent {
  public opened: boolean = false
  contactForm;
  constructor(private formBuilder: FormBuilder, public apis: HttpService, private alert: AlertService) {
    this.contactForm = this.formBuilder.group({
      firstname: new FormControl('', Validators.compose([Validators.required])),
      lastname: new FormControl('', Validators.compose([Validators.required])),
      email: new FormControl('', Validators.compose([Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])),
      phnNum: new FormControl('', [Validators.required, Validators.pattern('^\\+?[0-9]{1,3}?[-. ]?\\(?[0-9]{2}\\)?[-. ]?[0-9]{3}[-. ]?[0-9]{4}$')]),
      skills: new FormControl<string[]>([]),
      designation: new FormControl('', [Validators.required]),
      Role: new FormControl('', [Validators.required]),
    });
  }


  public listItems: Array<string> = [
    'React',
    'Angular',
    'Vue',
    'Node',
    'Python',
  ]

  public designationList: Array<{ text: string; value: string }> = [
    { text: 'Junior', value: 'Junior' },
    { text: 'Engineer', value: 'Engineer' },
    { text: 'Lead', value: 'Lead' },
    { text: 'Artictech', value: 'Artictech' },
  ]

  public demoItems: Array<string> = ["Architect", "Lead", "Sr.Engineer", "Engineer","Junior","Intern"];
  public roleItems: Array<string> = ["Admin", "User"];

  generatePassword() {
    const length = 8;
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@$%^&(){}[]';
    
    let password = '';
    
    // Generate random uppercase letter as the first character
    password += uppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters.length));
    
    // Generate random lowercase letter
    password += lowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters.length));
    
    // Generate random number
    password += numbers.charAt(Math.floor(Math.random() * numbers.length));
    
    // Generate random symbol
    password += symbols.charAt(Math.floor(Math.random() * symbols.length));
    
    // Generate remaining random characters
    const remainingLength = length - 4;
    const allCharacters = uppercaseLetters + lowercaseLetters + numbers + symbols;
    
    for (let i = 0; i < remainingLength; i++) {
      password += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
    }
    
    // Shuffle the password characters
    password = password.split('').sort(function(){return 0.5-Math.random()}).join('');
    
    return password;
  }

  onSubmit() {
    this.contactForm.markAllAsTouched();
    this.contactForm.markAsDirty();
    if(this.contactForm.valid){
      let formValue:any = this.contactForm.value;
      formValue['password'] = this.generatePassword();
      formValue['name'] = formValue['firstname'] + ' ' + formValue['lastname'];
      this.apis.usersPostApi(formValue).subscribe((res)=>{
        this.alert.displayNotification({type:'success', msg:'Sucessfully Created New User'});
        this.contactForm.reset();
      });
    }
  }

  public handleValueChange(value: any): void {
    this.contactForm.controls['skills'].setValue(value)
  }

  public handleDropDownChange(value: any): void{
    this.contactForm.controls['designation'].setValue(value)
  }

  onClear() {
    console.log(this.contactForm,'clear')
    this.contactForm.reset()
  }

  public close(status: string): void {
    console.log(`Dialog result: ${status}`)
    this.opened = false
  }
  public open(): void {
    this.opened = true
  }
  public gridData: any[] = [
    {
      ProductID: 1,
      ProductName: 'Chai',
      SupplierID: 1,
      CategoryID: 1,
      QuantityPerUnit: '10 boxes x 20 bags',
      UnitPrice: 18.0,
      UnitsInStock: 39,
      UnitsOnOrder: 0,
      ReorderLevel: 10,
      Discontinued: false,
      Category: {
        CategoryID: 1,
        CategoryName: 'Beverages',
        Description: 'Soft drinks, coffees, teas, beers, and ales',
      },
    },
    {
      ProductID: 2,
      ProductName: 'Chang',
      SupplierID: 1,
      CategoryID: 1,
      QuantityPerUnit: '24 - 12 oz bottles',
      UnitPrice: 19.0,
      UnitsInStock: 17,
      UnitsOnOrder: 40,
      ReorderLevel: 25,
      Discontinued: false,
      Category: {
        CategoryID: 1,
        CategoryName: 'Beverages',
        Description: 'Soft drinks, coffees, teas, beers, and ales',
      },
    },
    // More data objects...
  ]
}
