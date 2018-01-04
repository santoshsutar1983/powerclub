import { Injectable } from '@angular/core';

import {Observable} from "rxjs/Observable";
import "rxjs/Rx";

import { Http, Headers, Response, RequestOptions} from '@angular/http';

// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';



@Injectable()
export class ApiService
{

  private API_URL = "http://topschooldev.prisms.in/rest/index.php/staff_list.json";
  //private API_URL = "http://topschooldev.prisms.in/rest/index.php/staff_list.json";
  headers: Headers;
  options: RequestOptions;

    constructor(public http:Http)
    {
          console.log('Data service connected...');
          this.headers = new Headers({ 'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'});
          this.options = new RequestOptions({ headers: this.headers });
    }
       //private _postsURL = "https://jsonplaceholder.typicode.com/posts";
      getMemberdetails(): Observable<any>
      {

          const body=
          {
            fun_name: 'GetMemberInfo',
            sid: 483
          };
          return this.http
              .post(this.API_URL, body, this.options)
              .map(res=>res.json())
              .catch(this.handleError);
     }

     getHolidaysdetails(): Observable<any>
     {

         const body=
         {
           fun_name: 'GetHolidaysInfo',
           sid: 483
         };
         return this.http
             .post(this.API_URL, body, this.options)
             .map(res=>res.json())
             .catch(this.handleError);
    }
     
     private handleError(error: Response)
     {
       return Observable.throw(error.statusText);
     }
}
