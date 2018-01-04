import { Component } from '@angular/core';
import { AjaxService } from './app.ajax.service'

import { RootObject, RegionalBloc, Translations,Language,Currency } from './app.country'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
 
})

export class AppComponent {

  title = 'Eerth Countries';
  
  constructor(){}
  

  ngOnInit(){

       
}


}


