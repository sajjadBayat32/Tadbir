import { Component, OnInit } from '@angular/core';
import {ComponentCommunicationService} from '../../_service/component-communication.service';
import {UserInfo} from '../../_class/user-info';
import {UserManagementService} from '../../_service/user-management.service';

@Component({
  selector: 'app-user-summary',
  templateUrl: './user-summary.component.html',
  styleUrls: ['./user-summary.component.css']
})
export class UserSummaryComponent implements OnInit {

  user_info: UserInfo;
  state = 'no-data';

  constructor(public CCService: ComponentCommunicationService, private userManagementService: UserManagementService) { }

  ngOnInit(): void {
    this.onUserSearch();
  }

  onUserSearch() {
    this.CCService.ee_search_user.subscribe(
      nationalCode => {
        if (nationalCode.length > 0) {
          this.getUser(nationalCode);
        }
      }
    )
  }

  getUser(nationalCode) {
    this.state = 'loading-data';
    setTimeout(() => {
      this.user_info = this.userManagementService.getUserInfo(nationalCode);
      this.state = 'data-loaded';
    }, 2000);

  }

}
