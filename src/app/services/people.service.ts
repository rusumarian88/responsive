import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {


  people=[
    {
      photo:['/assets/people1.png'],
      name:"Jorge Robertson",
      function:"CS at Google",
    },
    {
      photo:['/assets/people2.png'],
      name:"Francisco Bell",
      function:"Designer at Microsoft",
    },
    {
      photo:['/assets/people3.png'],
      name:"Beth Fox",
      function:"Developer at Airbnb",
    },
  ]

  constructor() { }
}
