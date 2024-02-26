import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-description',
  templateUrl: './title-description.component.html',
  styleUrls: ['./title-description.component.scss']
})
export class TitleDescriptionComponent implements OnInit {

  @Input() title?:string;
  @Input() description?:string;
  @Input() button?:string;
  @Input() alignLeft:boolean=false;

  

  constructor() { }

  ngOnInit(): void {
  }

}
