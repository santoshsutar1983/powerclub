import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { MembershipdetailsComponent } from './membershipdetails/membershipdetails.component';
import { ApiService } from './api.service';
import { HolidaysComponent } from './holidays/holidays.component';

@NgModule({
  declarations: [
    AppComponent,
    MembershipdetailsComponent,
    HolidaysComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
            { path : '',component : AppComponent },
            { path : 'memberdetails',component : MembershipdetailsComponent },
            { path : 'holidays',component : HolidaysComponent }
          ])
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
