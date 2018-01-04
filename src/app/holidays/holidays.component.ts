import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css']
})
export class HolidaysComponent implements OnInit {
      holidays: any[];
      holidaysFound = false;
      searching = false;
      errorMessage: String;
      constructor(private apiSerivce: ApiService) { }

  handleSuccess(data)
      {
          this.holidaysFound = true;
          this.holidays = data.holidaysresult;
          console.log(data.holidaysresult);
      }
 handleError(error)
      {
        console.log(Error);
      }

  ngOnInit()
  {
    console.log('ngOnInit holidays');
          this.apiSerivce.getHolidaysdetails().subscribe(
            data => this.handleSuccess(data),
            error => this.handleError(error),
            () => this.searching = false);
  }

}
