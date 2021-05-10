import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {


  baseUrl:string = "http://lyonsdemoz.website/toothzone/api/";
  xkey: string = "82haf8kklm3fotpr23-f4gh2-vq587-32kytms";


  constructor() { }
}
