import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-native-child',
  templateUrl: './native-child.component.html',
  styleUrls: ['./native-child.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class NativeChildComponent {}
