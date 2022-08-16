import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentsModuleModule } from './students-module/students-module.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StudentsModuleModule,
    HttpClientModule
  ],

  providers: [ 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
