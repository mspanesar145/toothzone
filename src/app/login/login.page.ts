import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {  get, set, remove } from '../api/storage.service';
import { Platform, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public validations_form: FormGroup;
  public validation_messages = {};
  public isSubmitted:boolean = false;
  public deviceToken : String = "";
  public platformType : String = "";


  constructor(private navControl: NavController, private router: Router, private formBuilder : FormBuilder,public platform: Platform) { }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      username: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }

  ionViewDidEnter() {
     this.platformType = this.platform.is("android") ? "ANDROID" : "IOS";
  }

  emailSignInPressed() {
    console.log("Login Pressed");
    this.router.navigateByUrl('/app/tabs/home');
  }
}
