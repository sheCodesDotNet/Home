import { NgModule } from '@angular/core';

import { Routes, RouterModule} from '@angular/router';

import { AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import { BodyComponent} from './body/body.component';

const appRoutes: Routes=[
   { path:"home",component:HeaderComponent},
   { path:"countreis",component:BodyComponent},
   { path:"",redirectTo:"/home", pathMatch: "full"}

]

const appRouter = RouterModule.forRoot(appRoutes);

@@NgModule({
    imports: [appRouter]
})
export class AppRoutingModule {}




