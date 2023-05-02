import { Component, ViewChild } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { FormBuilder } from '@angular/forms'
@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css'],
})
export class AddRecordComponent {
  public opened: boolean = false
  contactForm;
  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      phoneNo: new FormControl('', [Validators.required]),
      skills: new FormControl<string[]>([]),
      designation: new FormControl('', [Validators.required]),
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

  onSubmit() {
    console.log(this.contactForm.value, 'submit');
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
