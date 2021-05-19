import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../api/user';
import {  set, get, remove } from '../api/storage.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.page.html',
  styleUrls: ['./contactus.page.scss'],
})
export class ContactusPage implements OnInit {

  public loggedInUser = new User();

  constructor(private router: Router) { }

  ngOnInit() {

    get("user").then((response:any) => {
      this.loggedInUser = new User(response[0]);
    });

  }

  homeButtonPressed() {
    this.router.navigate(['/app/tabs/home']);
  }


}
