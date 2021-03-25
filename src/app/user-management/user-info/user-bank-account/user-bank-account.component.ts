import { Component, OnInit } from '@angular/core';
import {BankAccount} from '../../../_class/bank-account';

@Component({
  selector: 'app-user-bank-account',
  templateUrl: './user-bank-account.component.html',
  styleUrls: ['./user-bank-account.component.css']
})
export class UserBankAccountComponent implements OnInit {

  listOfData: BankAccount[] = [
    {
      isDefault: 1,
      bankName: 'پاسارگاد',
      accountNumber: '120654656066',
      shabaNumber: '200120010000001931184605',
      baTypeName: 'جاری',
      bankBranch: 'میدان صنعت',
      bankId: 166
    },
    {
      isDefault: 0,
      bankName: 'پاسارگاد',
      accountNumber: '120654656066',
      shabaNumber: '200120010000001931184605',
      baTypeName: 'جاری',
      bankBranch: 'میدان صنعت',
      bankId: 166
    },
    {
      isDefault: 0,
      bankName: 'پاسارگاد',
      accountNumber: '120654656066',
      shabaNumber: '200120010000001931184605',
      baTypeName: 'جاری',
      bankBranch: 'میدان صنعت',
      bankId: 166
    },
    {
      isDefault: 0,
      bankName: 'پاسارگاد',
      accountNumber: '120654656066',
      shabaNumber: '200120010000001931184605',
      baTypeName: 'جاری',
      bankBranch: 'میدان صنعت',
      bankId: 166
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
