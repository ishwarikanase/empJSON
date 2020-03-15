import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import {EmpServiceService} from './emp-service.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    EmpDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
  ],
  providers: [EmpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
