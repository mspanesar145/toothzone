import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SubmitQueryPage } from '../submit-query/submit-query.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController,
    private route: Router) { }

  ngOnInit() {

  }

  submitQueryClicked() {
    this.route.navigate(['app/tabs/submit-query']);
  }
  
  contactUsClicked() {
    this.route.navigate(['app/tabs/contactus']);
  }

}
