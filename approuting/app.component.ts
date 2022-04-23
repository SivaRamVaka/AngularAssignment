import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a [routerLink]="['/']">Home</a> |
    <a [routerLink]="['/about']">About</a> |
    <a [routerLink]="['/help']">Help</a> |
    <a [routerLink]="['/security']">Security</a> |
    <a [routerLink]="['/contact']">Contact</a>
    <div>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent { }