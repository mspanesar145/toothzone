import { Injectable, ɵPlayer } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {  get, set, remove } from '../api/storage.service';



@Injectable({
  providedIn: 'root'
})
export class RestService {


  baseUrl:string = "http://lyonsdemoz.website/toothzone/api/";
  xkey: string = "82haf8kklm3fotpr23-f4gh2-vq587-32kytms";
  phoneNumber: string = "";


  constructor(private  httpClient : HttpClient) { }

  public login(data) : Observable<any> {
    let api: string = "home/user_login/format/json";

    var formData: any = new FormData();
    formData.append("phone_number", data.phoneNumber);
    formData.append("X-API-KEY", this.xkey);
    formData.append("submit","");
    //alert(this.baseUrl + api);
    //alert(JSON.stringify(data));

    return  this.httpClient .post(this.baseUrl + api, formData).pipe(map((response: any)  => {
      //alert(JSON.stringify(response));

        return (response);
    }));
  }
  

  public verifyCode(data,phoneNumber) : Observable<any> {
    let api: string = "home/user_login_verify/format/json";
    let verifyCode: string = data.verifyCode1+""+data.verifyCode2+""+data.verifyCode3+""+data.verifyCode4+""+data.verifyCode5+""+data.verifyCode6;
    console.log("verifyCode :"+verifyCode);
    var formData: any = new FormData();
    
    
    console.log("phone number : "+phoneNumber);
    formData.append("phone_number", phoneNumber);
    formData.append("X-API-KEY", this.xkey);
    formData.append("verify_code",verifyCode);
    formData.append("submit","");
    //alert(this.baseUrl + api);
    //alert(JSON.stringify(data));

    return  this.httpClient .post(this.baseUrl + api, formData).pipe(map((response: any)  => {
      //alert(JSON.stringify(response));

        return (response);
    }));
  }
}
