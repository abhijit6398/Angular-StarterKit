import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { FormBuilder } from '@angular/forms'
@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent {
  public opened: boolean = false;
  contactForm: any;
  constructor(private formBuilder: FormBuilder){
    this.contactForm = this.formBuilder.group({
      firstname: [''],
      lastname: [''],
      email: [''],
    });
  }

  onSubmit() {
    console.log(this.contactForm.value, 'submit');
  }

  onClear(){
    console.log(this.contactForm.value,'hello')
  }

  public close(status: string): void {
    console.log(`Dialog result: ${status}`);
    this.opened = false;
  }
  public open(): void {
    this.opened = true;
  }
  public gridData: any[] = [
    {
        "ProductID": 1,
        "ProductName": "Chai",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "10 boxes x 20 bags",
        "UnitPrice": 18.0,
        "UnitsInStock": 39,
        "UnitsOnOrder": 0,
        "ReorderLevel": 10,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    {
        "ProductID": 2,
        "ProductName": "Chang",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "24 - 12 oz bottles",
        "UnitPrice": 19.0,
        "UnitsInStock": 17,
        "UnitsOnOrder": 40,
        "ReorderLevel": 25,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "CategoryName": "Beverages",
            "Description": "Soft drinks, coffees, teas, beers, and ales"
        }
    },
    // More data objects...
];

}
