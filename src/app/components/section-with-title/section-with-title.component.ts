import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-with-title',
  templateUrl: './section-with-title.component.html',
  styleUrls: ['./section-with-title.component.scss']
})
export class SectionWithTitleComponent implements OnInit {

  @Input() title?:string;
  @Input() description?:string;
  @Input() button?:string;
  @Input() bg:string="transparent"
  @Input() isRow:boolean=false


  constructor() { }

  ngOnInit(): void {
  }

}
