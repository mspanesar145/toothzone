import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { User } from '../api/user';
import {  set, get, remove } from '../api/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public loggedInUser = new User();

  constructor(public navCtrl: NavController,
    private router: Router) { }

  ngOnInit() {

    get("user").then((response:any) => {
      this.loggedInUser = new User(response[0]);
    });

  }

  submitQueryClicked() {
    this.router.navigate(['app/tabs/submit-query']);
  }
  
  contactUsClicked() {
    this.router.navigate(['app/tabs/contactus']);
  }

  homeButtonPressed() {
    this.router.navigate(['/app/tabs/home']);
  }

}
