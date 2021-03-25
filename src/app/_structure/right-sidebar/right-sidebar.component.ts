import { Component, OnInit } from '@angular/core';
import {ComponentCommunicationService} from '../../_service/component-communication.service';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.css']
})
export class RightSidebarComponent implements OnInit {

  toggled = true;
  isVisible = false;
  nationalCode = '';

  constructor(private CCService: ComponentCommunicationService) {
  }

  ngOnInit() {
  }

  searchUser(event_type, $event?) {
    if ((event_type === 'key-press' && $event.keyCode === 13) || event_type === 'on-click') {
      this.CCService.search_user(this.nationalCode);
    }
  }

}
