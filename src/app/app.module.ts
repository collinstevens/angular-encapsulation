import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShadowDomComponent } from './shadow-dom/shadow-dom.component';
import { EmulatedComponent } from './emulated/emulated.component';
import { NativeComponent } from './native/native.component';

@NgModule({
  declarations: [AppComponent, ShadowDomComponent, EmulatedComponent, NativeComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
