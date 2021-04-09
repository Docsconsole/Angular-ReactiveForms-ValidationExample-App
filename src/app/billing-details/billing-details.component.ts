import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/user';
import { EmailValidator } from '../validators/email-validator';

@Component({
  selector: 'app-billing-details',
  templateUrl: './billing-details.component.html',
  styleUrls: ['./billing-details.component.css']
})
export class BillingDetailsComponent implements OnInit {

  submitted = false;
  userForm: FormGroup;

  user = {
    firstName: 'firstName',
    lastName: 'lastName',
    userName: 'userName',
    email: 'you@example.com',
    address1: 'Addres line1',
    address2: 'Addres line2'
  };
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.userForm = new FormGroup({
      firstName: new FormControl(this.user.firstName, [
        Validators.required,
        Validators.minLength(4),
      ]),
      lastName: new FormControl(this.user.lastName, [
        Validators.required,
        Validators.minLength(4),
      ]),
      userName: new FormControl(this.user.userName, [
        Validators.required,
        Validators.minLength(4),
      ]),
      email: new FormControl(this.user.email, [
        Validators.required,
        EmailValidator
      ]),
      
      address1: new FormControl(this.user.address1, [
        Validators.required
      ]),
      address2: new FormControl(this.user.address2, [
        Validators.required
      ])
    });
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.userForm.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.userForm.value, null, 4));
  }
  onReset() {
    this.submitted = false;
    this.userForm.reset();
  }
  get f() { return this.userForm.controls; }
  logFormValue() {
    console.log(this.userForm.value);
  }
  get firstName() { return this.userForm.get('firstName'); }
  get lastName() { return this.userForm.get('lastName'); }
  get userName() { return this.userForm.get('userName'); }
  get email() { return this.userForm.get('email'); }
  get address1() { return this.userForm.get('address1'); }
  get address2() { return this.userForm.get('address2'); }


}