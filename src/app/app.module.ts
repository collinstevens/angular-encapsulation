import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShadowDomComponent } from './shadow-dom/shadow-dom.component';
import { EmulatedComponent } from './emulated/emulated.component';
import { NativeComponent } from './native/native.component';
import { ShadowDomHostComponent } from './shadow-dom-host/shadow-dom-host.component';
import { EmulatedChildComponent } from './shadow-dom-host/emulated-child/emulated-child.component';
import { NativeChildComponent } from './shadow-dom-host/native-child/native-child.component';
import { ShadowDomChildComponent } from './shadow-dom-host/shadow-dom-child/shadow-dom-child.component';

@NgModule({
  declarations: [AppComponent, ShadowDomComponent, EmulatedComponent, NativeComponent, ShadowDomHostComponent, EmulatedChildComponent, NativeChildComponent, ShadowDomChildComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
