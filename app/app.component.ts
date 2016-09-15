import { Component } from '@angular/core';
import { TemplatesComponent } from './Templates/Templates.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <teste-templates></teste-templates>
    `,
    directives: [TemplatesComponent]
})
export class AppComponent { }
