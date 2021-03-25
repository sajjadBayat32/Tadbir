import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user-base-info',
  templateUrl: './user-base-info.component.html',
  styleUrls: ['./user-base-info.component.css']
})
export class UserBaseInfoComponent implements OnInit {

  form = new FormGroup({})

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      parent: '',
      birthCertId: '',
      birthCertificationNumber: '',
      issuingCity: '',
      birthDate: '',
      bourseAccountName: '',
    });
  }

  submitForm() {

  }

}
