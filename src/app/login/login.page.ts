import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {  set, remove } from '../api/storage.service';
import { Platform, NavController } from '@ionic/angular';
import { RestService } from '../api/rest.service';
import { MiscService } from '../api/misc.service';

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


  constructor(private navControl: NavController, private router: Router, private formBuilder : FormBuilder, private restService: RestService, public miscService : MiscService,public platform: Platform) { }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      phoneNumber: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }

  ionViewDidEnter() {
     this.platformType = this.platform.is("android") ? "ANDROID" : "IOS";
  }

  emailSignInPressed() {
    console.log("Login Pressed");
    this.router.navigateByUrl('phone-verify');
  }
  sendOtp(form){
    // debugger;
     this.isSubmitted = true;
     if (!this.validations_form.valid) {
       return false;
     } else {
       this.miscService.presentLoading("logging in...");
       this.restService.login(form.value).subscribe((res)=>{
        this.miscService.dismissLoading();

         if (res.status == 1) {
           console.log(form.value.phoneNumber)
           remove("phoneNumber");
           set("phoneNumber",form.value.phoneNumber)
           this.router.navigateByUrl('phone-verify');
          }else {
           alert(res.message);
         }
       });
   
     }
   }
}
