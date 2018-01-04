import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

import { RootObject, RegionalBloc, Translations,Language,Currency } from './app.country'

@Injectable()

export class AjaxService{
   
    constructor(private paramService: HttpClient){}

    getCountry(callback_p: (aObj: RootObject) => void): void {
      
    
        this.paramService.get("https://restcountries.eu/rest/v2/all").subscribe(callback_p);
    }   

}