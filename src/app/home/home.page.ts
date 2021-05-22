import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SubmitQueryPage } from '../submit-query/submit-query.page';
import { Router } from '@angular/router';
import {  set, get, remove } from '../api/storage.service';
import { User } from '../api/user';
import { Promotion } from '../api/promotion';
import { RestService } from '../api/rest.service';
import { Quotation } from '../api/quotation';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public loggedInUser = new User();
  public promotions: Promotion[] = [];
  public quotation = new Quotation;

  constructor(public navCtrl: NavController,
    private route: Router,
    private restService: RestService) { }

  ngOnInit() {

    get("user").then((response:any) => {
      this.loggedInUser = new User(response[0]);

    });

    this.restService.allPromotions().subscribe((response) => {
      this.promotions = response;
    });

    this.restService.getQuotations().subscribe((response) => {
        this.quotation = response[0];
    });

  }

  submitQueryClicked() {
    this.route.navigate(['app/tabs/submit-query']);
  }
  
  contactUsClicked() {
    this.route.navigate(['app/tabs/contactus']);
  }

}
