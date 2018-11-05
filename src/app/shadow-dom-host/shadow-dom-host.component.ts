import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shadow-dom-host',
  templateUrl: './shadow-dom-host.component.html',
  styleUrls: ['./shadow-dom-host.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ShadowDomHostComponent {}
