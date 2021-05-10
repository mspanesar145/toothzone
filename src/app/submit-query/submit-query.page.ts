import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit-query',
  templateUrl: './submit-query.page.html',
  styleUrls: ['./submit-query.page.scss'],
})
export class SubmitQueryPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  homeButtonPressed() {
    this.router.navigate(['/app/tabs/home']);
  }

}
