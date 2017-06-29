/// <reference path="../typings/tsd.d.ts" />

import { Component, OnInit } from 'angular2/core';
import {connectorServices} from './connector.service';
import {githubComponent} from './githubComponent.component'
import {postModel} from './postModel';
import 'rxjs/add/operator/delay';

@Component({
    selector: 'my-app',
    template: `        
        <github></github>
    `,
    directives: [githubComponent]
})
export class AppComponent {
      
}