import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user-address-and-phone',
  templateUrl: './user-address-and-phone.component.html',
  styleUrls: ['./user-address-and-phone.component.css']
})
export class UserAddressAndPhoneComponent implements OnInit {

  form = new FormGroup({})

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      provinceName: '',
      cityName: '',
      address: '',
      phone: '',
      postalCode: '',
    });
  }

}
