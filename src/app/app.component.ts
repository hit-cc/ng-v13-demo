import { Component, Directive, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
@Directive({selector: 'app-my-component'})
export class Pane {
  @Input() id!: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<div #child1>First Child</div>
  //   <div>Second Child</div> 
  //   <app-my-component id="1"></app-my-component>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Angular v13';
  @ViewChild('child1') firstChild!: ElementRef;
  //  learn about @ViewChild directory
  //syntax :-- @ViewChild(selector,{read:ReferenceType}) fieldName;
  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    console.log('Element Ref::', this.element.nativeElement);
  }
}
