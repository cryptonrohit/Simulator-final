import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OverviewPageComponent } from './components/overview-page/overview-page.component';
import { ConnectComponent } from './components/connect/connect.component';
import { StatusValuesComponent } from './components/status-values/status-values.component';
import { HttpClientModule } from '@angular/common/http'
import { DataServiceService } from './Services-ignore/data-service.service';
import { DummyServiceComponent } from './Components-ignore/dummy-service/dummy-service.component';
import { EmployeeService } from './Services-ignore/employee.service';
import { DummyEmployeeComponent } from './Components-ignore/dummy-employee/dummy-employee.component';
import { ConnectorComponent } from './Components-ignore/connector/connector.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { ChargerStatusValuesComponent } from './Components-ignore/charger-status-values/charger-status-values.component';
import { SubtenantValuesComponent } from './Components-ignore/subtenant-values/subtenant-values.component';
import { HtmlComponent } from './Components-ignore/html/html.component';

@NgModule({ 
  declarations: [
    AppComponent,
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
