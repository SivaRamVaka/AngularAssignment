import {BrowserModule} from '@angular/platform-browser';
import {NgModule}      from '@angular/core';
import {AppComponent}  from './app.component';
import {RemoveSpaces} from './remove-space';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [     
        BrowserModule,
        FormsModule
  ],
  declarations: [
        AppComponent, RemoveSpaces  
  ],
  bootstrap: [
        AppComponent
  ]
})
export class AppModule { }
