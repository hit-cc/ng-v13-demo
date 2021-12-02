import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [AppComponent, MyComponentComponent, ErrorComponent],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  bootstrap: []
})
export class AppModule {}
