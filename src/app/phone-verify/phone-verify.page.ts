import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { RestService } from '../api/rest.service';
import { MiscService } from '../api/misc.service';
import { Router } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
import {  get, set, remove } from '../api/storage.service';


@Component({
  selector: 'app-phone-verify',
  templateUrl: './phone-verify.page.html',
  styleUrls: ['./phone-verify.page.scss'],
})

export class PhoneVerifyPage implements OnInit {

  constructor(private navControl: NavController, private router: Router, private formBuilder : FormBuilder, private restService: RestService, public miscService : MiscService,public platform: Platform) { }
  public validations_form: FormGroup;
  public validation_messages = {};
  public isSubmitted:boolean = false;


  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      verifyCode1: new FormControl('', Validators.compose([
        Validators.required
      ])),
      verifyCode2: new FormControl('', Validators.compose([
        Validators.required
      ])),
      verifyCode3: new FormControl('', Validators.compose([
        Validators.required
      ])),
      verifyCode4: new FormControl('', Validators.compose([
        Validators.required
      ])),
      verifyCode5: new FormControl('', Validators.compose([
        Validators.required
      ])),
      verifyCode6: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }
  verifyCode(form){
    // debugger;
     this.isSubmitted = true;
     if (!this.validations_form.valid) {
       return false;
     } else {
       this.miscService.presentLoading("verifying code...");
       get("phoneNumber").then((response:any) => {
        console.log(response);
        this.restService.verifyCode(form.value,response).subscribe((res)=>{
          this.miscService.dismissLoading();
  
           if (res.status == 1) {
             this.router.navigateByUrl('home');
            }else {
             alert(res.message);
           }
         });


      });
      
   
     }
   }

}
