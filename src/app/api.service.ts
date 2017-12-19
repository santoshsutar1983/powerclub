import { Injectable } from '@angular/core';

import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import {IPosts} from "./membershipdetails/posts";

@Injectable()
export class ApiService {

  constructor(public http:Http) { }
  private _postsURL = "https://jsonplaceholder.typicode.com/posts";

  getPosts(): Observable<IPosts[]>{
    return this.http
          .get(this._postsURL)
            .map((response: Response) => {
                return <IPosts[]>response.json();
           })
             .catch(this.handleError);
     }

     private handleError(error: Response) {
       return Observable.throw(error.statusText);
    }
}
