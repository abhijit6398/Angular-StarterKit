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
  contactForm: any
  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      firstname: [
        '',
        Validators.compose([Validators.required, Validators.minLength(5)]),
      ],
      lastname: [
        '',
        Validators.compose([Validators.required, Validators.minLength(5)]),
      ],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      phoneNo: [
        '',
        Validators.compose([Validators.required, Validators.pattern('')]),
      ],
      skills: [''],
      designation: (['', Validators.compose([Validators.required])]),
    })
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

  public demoItems: Array<string> = ["Small", "Medium", "Large"];

  onSubmit(value:{}) {
    console.log(this.contactForm.value, 'submit')
  }

  public handleValueChange(value: string[]): void {
    this.contactForm.controls.skills.setValue(value)
  }

  public handleDropDownChange(value: string): void{
    this.contactForm.controls.designation.setValue(value)
  }

  onClear() {
    console.log(this.contactForm,'clear')
    this.contactForm.reset({
      firstname: [''],
      lastname: [''],
      email: [''],
      phoneNo: [''],
      skills: [''],
      designation: [''],
    })
    // console.log('After reset:', this.contactForm.value);

    // // Reset the multiselect control
    // const skillsMultiSelect = this.contactForm.get('skills');
    // skillsMultiSelect.reset();
    // skillsMultiSelect.setValue([]);
    // skillsMultiSelect.markAsUntouched();
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
