import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shadow-dom-child',
  templateUrl: './shadow-dom-child.component.html',
  styleUrls: ['./shadow-dom-child.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ShadowDomChildComponent {}
