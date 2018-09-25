import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template:  `
  <pm-products></pm-products>

  `
  
})
export class AppComponent {
  pageTitle: string = 'ACME: Getting Started';
}
