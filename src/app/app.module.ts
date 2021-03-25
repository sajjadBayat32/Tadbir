import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DynamicTableComponent} from './dynamic-table/dynamic-table.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NZ_I18N} from 'ng-zorro-antd/i18n';
import {en_US} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {NgZorroModule} from './_modules/ng-zorro.module';
import {RightSidebarComponent} from './_structure/right-sidebar/right-sidebar.component';
import {MenuComponent} from './_structure/right-sidebar/menu/menu.component';
import {UserInfoComponent} from './user-management/user-info/user-info.component';
import {UserSummaryComponent} from './user-management/user-summary/user-summary.component';
import {RouterModule, Routes} from '@angular/router';
import {UserAddressAndPhoneComponent} from './user-management/user-info/user-address-and-phone/user-address-and-phone.component';
import {UserBankAccountComponent} from './user-management/user-info/user-bank-account/user-bank-account.component';
import {UserBaseInfoComponent} from './user-management/user-info/user-base-info/user-base-info.component';
import {UserContractInfoComponent} from './user-management/user-info/user-contract-info/user-contract-info.component';
import {HeaderComponent} from './_structure/header/header.component';

const routes: Routes = [
]

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    DynamicTableComponent,
    RightSidebarComponent,
    MenuComponent,
    UserInfoComponent,
    UserSummaryComponent,
    UserAddressAndPhoneComponent,
    UserBankAccountComponent,
    UserBaseInfoComponent,
    UserContractInfoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{provide: NZ_I18N, useValue: en_US}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
