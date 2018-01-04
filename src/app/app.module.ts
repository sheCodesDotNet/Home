import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http'


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { AjaxService } from './app.ajax.service';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';

import { RouterModule } from "@angular/router";




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    RouterModule
    
  ],
  providers: [AjaxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
