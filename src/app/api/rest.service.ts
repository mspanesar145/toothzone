import { Injectable, ɵPlayer } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {  get, set, remove } from '../api/storage.service';
import { DentalService } from './dental-service';
import { Promotion } from './promotion';
import { Quotation } from './quotation';



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

  public signup(data) : Observable<any> {
    let api: string = "home/user_registration/format/json";

    var formData: any = new FormData();
    formData.append("name", data.name);
    formData.append("phone_number", data.phone_number);
    formData.append("gender", data.gender);
    formData.append("date_of_birth", data.date_of_birth);
    formData.append("address", data.address);
    formData.append("state", data.state);
    formData.append("post_code", data.post_code);
    formData.append("agree_term_conditions", data.agree_term_conditions);
    formData.append("X-API-KEY", this.xkey);
    formData.append("submit","");
    //alert(this.baseUrl + api);
    //alert(JSON.stringify(data));

    return  this.httpClient .post(this.baseUrl + api, formData).pipe(map((response: any)  => {
      //alert(JSON.stringify(response));

        return (response);
    }));
  }

  public submitQuery(data) : Observable<any> {
    let api: string = "home/save_user_query/format/json";

    var formData: any = new FormData();
    formData.append("user_id", data.user_id);
    formData.append("user_query", data.query);
    formData.append("X-API-KEY", this.xkey);
    formData.append("submit","");
    //alert(this.baseUrl + api);
    //alert(JSON.stringify(data));

    return  this.httpClient .post(this.baseUrl + api, formData).pipe(map((response: any)  => {
      //alert(JSON.stringify(response));

        return (response);
    }));
  }

  public allDentalServices() : Observable<DentalService[]> {
    let api: string = "home/get_services/format/json?X-API-KEY="+this.xkey+"&submit=";

    return  this.httpClient .get(this.baseUrl + api).pipe(map((response: any)  => {
      //alert(JSON.stringify(response));
      let dentalServices = response.data;
      console.log(response.data)
        return  dentalServices.map((dentalService: DentalService) => new DentalService(dentalService));
    }));
  }

  public allPromotions() : Observable<Promotion[]> {
    let api: string = "home/get_promotions/format/json?X-API-KEY="+this.xkey+"&submit=";

    return  this.httpClient .get(this.baseUrl + api).pipe(map((response: any)  => {
      //alert(JSON.stringify(response));
      let promotions = response.data;
      console.log(response.data)
        return  promotions.map((promotion: Promotion) => new Promotion(promotion));
    }));
  }


  public getQuotations() : Observable<Quotation> {

  
    let api: string = "home/get_quotation/format/json?X-API-KEY="+this.xkey+"&submit=";

    return  this.httpClient .get(this.baseUrl + api).pipe(map((response: any)  => {
      //alert(JSON.stringify(response));
      let promotions = response.data;
      console.log(response.data)
        return  promotions.map((promotion: Promotion) => new Promotion(promotion));
    }));

  }
}
