import { Component, OnInit } from 'angular2/core'
import {githubConnectorService} from './githubConnector.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import { Observable } from "rxjs/Rx";

@Component({
    selector: 'github',
    templateUrl: 'app/github.template.html',
    styleUrls: ["app/styles.css"],
    providers: [githubConnectorService,HTTP_PROVIDERS]
})

export class githubComponent implements OnInit{
    user={};
    followers=[];
    loadNow=true;  

    constructor(private _gitConnector: githubConnectorService){        
    }

    ngOnInit(){//get data onInit. As we want our constructor to be lightweight.
        var userProfile = this._gitConnector.getUserProfile();

        var followers=this._gitConnector.getUserFollowers();

        Observable.forkJoin(userProfile,followers)
            .subscribe(resp=>{
                this.user=resp[0];
                this.loadNow=false;  
                this.followers=resp[1];
               // console.log(resp);
            })
    }
}