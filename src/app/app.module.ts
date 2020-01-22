import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import { ConnectComponent } from './connect/connect.component';
import { StatusValuesComponent } from './status-values/status-values.component';
import { HttpClientModule } from '@angular/common/http'
import { DataServiceService } from './data-service.service';
import { DummyServiceComponent } from './dummy-service/dummy-service.component';
import { EmployeeService } from './employee.service';
import { DummyEmployeeComponent } from './dummy-employee/dummy-employee.component';
import { ConnectorComponent } from './connector/connector.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ChargerStatusValuesComponent } from './charger-status-values/charger-status-values.component';
import { SubtenantValuesComponent } from './subtenant-values/subtenant-values.component';
import { HtmlComponent } from './html/html.component';

@NgModule({ 
  declarations: [
    AppComponent,
    LoginComponent,
    OverviewPageComponent,
    ConnectComponent,
    StatusValuesComponent,
    DummyServiceComponent,
    DummyEmployeeComponent,
    ConnectorComponent,
    TransactionComponent,
    ChargerStatusValuesComponent,
    SubtenantValuesComponent,
    HtmlComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'connect', component: ConnectComponent},
      {path:'overview-page', component: OverviewPageComponent},
      {path:'connector', component: ConnectorComponent},
      {path:'transaction', component: TransactionComponent},
      {path:'html',component:HtmlComponent},
      {path:'', component: OverviewPageComponent}
    ])    
  ],
  providers: [DataServiceService, EmployeeService, SubtenantValuesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
