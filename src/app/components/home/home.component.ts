import { Component, OnInit } from '@angular/core';
import { PartnersService } from 'src/app/services/partners.service';
import {BreakpointObserver,BreakpointState} from '@angular/cdk/layout';
import {BenefitsService } from 'src/app/services/benefits.service';
import { PeopleService } from 'src/app/services/people.service';


@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nrfruit=3
  nrbenefits=3

  private fruits:string[]=["mere", "pere","struguri","caise","prune","lamai"]

  constructor(

    public partnersService:PartnersService,
    public benefitsService:BenefitsService,
    public peopleService:PeopleService,
    private breakPointObserver:BreakpointObserver,

  ) {

    breakPointObserver.observe("(max-width:640px)").subscribe((result:BreakpointState)=>{
      if(result.matches){
        this.nrfruit=3
      }else{
        this.nrfruit=this.fruits.length
      }
    })
 
    breakPointObserver.observe("(max-width:640px)").subscribe((result:BreakpointState)=>{
      if(result.matches){
        this.nrbenefits=3
      }else{
        this.nrbenefits=this.benefitsService.benefits.length
      }
    })
    

   }

  ngOnInit(): void {
  }



  getBenefits():any[]{
    return this.benefitsService.benefits.slice(0,this.nrbenefits)
  }

  viewMore(){
    this.nrbenefits=this.benefitsService.benefits.length
  }

  // getFruits():string[]{
  //   return this.fruits.slice(0,this.nrfruit)
  // }

    
}

