import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';

export interface Benefit{
  icon?:string;
  title?:string;
  description?:string;
}

@Injectable({
  providedIn: 'root'
})
export class BenefitsService {



  benefits=[
    {
      icon:"/assets/icocard1.png",
      title:"Team Surveys & Reports",
      description:"Short, anonymous surveys track your team's needs weekly so you can focus.",
    },
    {
      icon:"/assets/icocard2.png",
      title:"Collaborative 1:1 ",
      description:"Build relationships by planning 1-on-1s and start meetings."
    },
    {
      icon:"/assets/icocard3.png",
      title:"Learning Center",
      description:"Quickly get solutions tailored to your personal challenges from the manager.",
    },
    {
      icon:"/assets/icocard4.png",
      title:"Anonymous Messaging",
      description:"Develop trust in a safe channel for important conversations.",
    },
    {
      icon:"/assets/icocard5.png",
      title:"Conversation Engine",
      description:"Communicate confidently with recommended talking points.",
    },
    {
      icon:"/assets/icocard6.png",
      title:"Exclusives Manager",
      description:"Access manager tips, activities and best practices from our team of experts.",
    },
    
  ]


  constructor() {

  }
}