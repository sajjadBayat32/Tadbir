import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user-contract-info',
  templateUrl: './user-contract-info.component.html',
  styleUrls: ['./user-contract-info.component.css']
})
export class UserContractInfoComponent implements OnInit {

  form = new FormGroup({})

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      creationDate: '',
      customerStatusId: '',
      isLegal: '',
      sejamStatus: '',
      accountNumber: '',
    });
  }

}
