import { Component } from '@angular/core';
import {RemoveSpaces} from './remove-space';
@Component({
  selector: 'app-root',
	template: `
	    <h2>Custom pipe : removeSpaces</h2>
			<h4> {{sampleString | removeSpaces}}</h4>
			<input [(ngModel)]="sometxt"/>
      <p (click)="somefun()">Click Here to see console output</p>
      {{sampleString | uppercase}}
	    `
})

export class AppComponent {
	sampleString = "Angular 2 is excellent";
	sometxt:string="some";
	constructor()
	{
		this.sampleString=this.sometxt;
	}
	
	somefun():void{
		this.sampleString=this.sometxt;
		console.log(new RemoveSpaces().transform(this.sampleString));
	}
}