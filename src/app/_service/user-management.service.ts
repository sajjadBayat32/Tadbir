import { Injectable } from '@angular/core';
import {UserInfo} from '../_class/user-info';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  constructor() { }

  getUserInfo(nationalCode) {
    return new UserInfo()
  }
}
