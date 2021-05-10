import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {  get, set, remove } from '../api/storage.service';
import { Platform, NavController } from '@ionic/angular';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

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
      ])),
      dob: new FormControl('', Validators.compose([
        Validators.required
      ])),
      address: new FormControl('', Validators.compose([
        Validators.required
      ])),
      state: new FormControl('', Validators.compose([
        Validators.required
      ])),
      phone: new FormControl('', Validators.compose([
        Validators.required
      ])),
      postCode: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  } 

  emailSignupPressed() {
    console.log("Signu Pressed");
    this.router.navigateByUrl('/app/tabs/home');

  }

}
