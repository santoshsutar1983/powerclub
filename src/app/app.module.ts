import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MembershipdetailsComponent } from './membershipdetails/membershipdetails.component';
import { ApiService } from './api.service';


@NgModule({
  declarations: [
    AppComponent,
    MembershipdetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
