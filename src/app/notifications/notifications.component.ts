import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notifications: any[];
  notificationsFound = false;
  searching = false;
  errorMessage: String;
  constructor(private apiSerivce: ApiService) { }

  handleSuccess(data)
      {
          this.notificationsFound = true;
          this.notifications = data.notificationsresult;
          console.log(data.notificationsresult);
      }
 handleError(error)
      {
        console.log(Error);
      }

  ngOnInit()
  {
    console.log('ngOnInit holidays');
          this.apiSerivce.getNotificationsdetails().subscribe(
            data => this.handleSuccess(data),
            error => this.handleError(error),
            () => this.searching = false);
  }

}
