import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-emulated-child',
  templateUrl: './emulated-child.component.html',
  styleUrls: ['./emulated-child.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class EmulatedChildComponent {}
