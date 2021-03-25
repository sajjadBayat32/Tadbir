import {Injectable, Output, EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentCommunicationService {
  @Output() ee_search_user: EventEmitter<any> = new EventEmitter();

  constructor() { }

  search_user(nationalCode, type?) {
    this.ee_search_user.emit(nationalCode);
  }
}
