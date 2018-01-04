import { Component, OnInit } from '@angular/core';

import { AjaxService } from '../app.ajax.service'

import { RootObject, RegionalBloc, Translations,Language,Currency } from '../app.country'


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  title = 'Eerth Countries';
  term="";
  str="";
  constructor(private paramService:AjaxService){}
 
  responseParam:RootObject=new RootObject();


  funcPram:(y:RootObject)=>void;



  ngOnInit(){

       this.funcPram=(x:RootObject):void => {this.responseParam=x};

        this.paramService.getCountry(this.funcPram);

        //console.log(this.responseParam)
       
        console.log(this.responseParam)
      

}

transform (countries?: any, term?: string)  {
  
 
  let inner:any;
  inner=countries.filter(RootObject=> 
    RootObject.name.toLowerCase().includes(term.toLowerCase()))
 
    
    this.responseParam=inner;
    console.log(this.responseParam)

 
  }

  showAll (){

    this.funcPram=(x:RootObject):void => {this.responseParam=x};
    
    this.paramService.getCountry(this.funcPram);
   // this.transform(this.responseParam,this.str);
    this.term="";
    
  }
  
}




  


