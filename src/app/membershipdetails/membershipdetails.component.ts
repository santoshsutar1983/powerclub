import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-membershipdetails',
  templateUrl: './membershipdetails.component.html',
  styleUrls: ['./membershipdetails.component.css']
})
export class MembershipdetailsComponent implements OnInit
{
  
    members: any[];
    membersFound = false;
    searching = false;
    errorMessage: String;
    recentgymplan:any[];recentgymplanFound=false;
   constructor(private apiSerivce: ApiService)
    {
    } 
  
  handleSuccess(data)
    // tslint:disable-next-line:one-line
    {
        this.membersFound = true;
        this.members = data.result;
        console.log(data.result);
        this.recentgymplanFound=true;
        this.recentgymplan=data.plans;
    }

handleError(error)
    // tslint:disable-next-line:one-line
    {
      console.log(Error);
    }
 
  // tslint:disable-next-line:one-line
   ngOnInit()
    {
        console.log('ngOnInit cj');
        this.apiSerivce.getMemberdetails().subscribe(
          data => this.handleSuccess(data),
          error => this.handleError(error),
          () => this.searching = false);
    }
}
