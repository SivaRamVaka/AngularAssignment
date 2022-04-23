import { Options } from './options';

import {Component, NgModule} from '@angular/core'
;
import {BrowserModule} from '@angular/platform-browser';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})


export class AppComponent {
 
selectedOption:Options = new Options(2, 'T-Shirts',599);
total:number=0;  

options = [
     new Options(1, 'Jeans',1199 ),
     new Options(2, 'T-Shirts',599 ),
     new Options(3, 'Shorts' ,799),
     new Options(4, 'Shirts',899)
,     new Options(5, 'Trousers',699),
     new Options(6, 'Chinos',899),
     new Options(7, 'Shoes',679)
  ];
  
  

getValue(optionid:any) 
{
      
this.selectedOption = this.options.filter((item)=> item.id == optionid)[0];
this.total=this.total+this.selectedOption.price;
  
}


}