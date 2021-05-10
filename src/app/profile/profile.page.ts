import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(public navCtrl: NavController,
    private router: Router) { }

  ngOnInit() {

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
