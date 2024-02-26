import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PartnersService {

   partners:string[]=["/assets/partner1.png","/assets/partner2.png","/assets/partner3.png",
   "/assets/partner4.png","/assets/partner5.png"]



  constructor() { }
}
