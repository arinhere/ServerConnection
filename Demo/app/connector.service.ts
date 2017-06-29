import {Http} from 'angular2/http';
import {Observable} from 'rxjs/observable';
import "rxjs/add/operator/map";
import { Injectable } from "angular2/core";
import {postModel} from './postModel'

@Injectable()
export class connectorServices{
    private _url = "http://jsonplaceholder.typicode.com/posts"; 
    
    constructor(private _http: Http){       
    } 
    

    getData(): Observable<postModel[]>{
        return this._http.get(this._url)
            .map(result => result.json());
    }

    postData(data2Post) {        
        return this._http.post(this._url,JSON.stringify(data2Post))
            .map(result => result.json());
    }
}