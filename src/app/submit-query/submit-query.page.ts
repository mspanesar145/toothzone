import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../api/user';
import {  set, get, remove } from '../api/storage.service';
import { MiscService } from '../api/misc.service';
import { RestService } from '../api/rest.service';

@Component({
  selector: 'app-submit-query',
  templateUrl: './submit-query.page.html',
  styleUrls: ['./submit-query.page.scss'],
})
export class SubmitQueryPage implements OnInit {

  public loggedInUser = new User();
  public query = "";

  constructor(private router: Router,
    private restService: RestService,
    private miscService: MiscService) { }

  ngOnInit() {

    get("user").then((response:any) => {
      this.loggedInUser = new User(response[0]);
    });

  }

  homeButtonPressed() {
    this.router.navigate(['/app/tabs/home']);
  }

  submitQueryPressed() {
    if (this.query == "") {
      return;
    }

    this.miscService.presentLoading("Submitting..");

    var postData = {"user_id" : this.loggedInUser.id, "query" : this.query};
    this.restService.submitQuery(postData).subscribe((response: any) => {
        this.miscService.dismissLoading();
        this.query = "";
        this.miscService.showToastMessage("Your query has been submitted.");
    });

}


}
