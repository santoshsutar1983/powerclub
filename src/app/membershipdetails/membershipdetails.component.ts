import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-membershipdetails',
  templateUrl: './membershipdetails.component.html',
  styleUrls: ['./membershipdetails.component.css']
})
export class MembershipdetailsComponent implements OnInit
{
  
    images: any[];
    imagesFound = false;
    searching = false;
    errorMessage: String;
   constructor(private apiSerivce: ApiService)
    {
    } 
  
  handleSuccess(data)
    // tslint:disable-next-line:one-line
    {
        this.imagesFound = true;
        this.images = data.result;
        console.log(data.result);
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
