import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-membershipdetails',
  templateUrl: './membershipdetails.component.html',
  styleUrls: ['./membershipdetails.component.css']
})
export class MembershipdetailsComponent implements OnInit {
  _postsArray: IPosts[];
  //constructor() { }
  constructor(private apiSerivce: ApiService) {
  }
  
  getPosts(): void {
     console.log("on function call..");
     this.apiSerivce.getPosts()
         .subscribe(
             resultArray => this._postsArray = resultArray,
             error => console.log("Error :: " + error)
         )
   }
  ngOnInit() {
    this.getPosts();
    console.log("onload");

}

}
export interface IPosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}