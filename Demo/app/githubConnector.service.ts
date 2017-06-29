import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core'

@Injectable()
export class githubConnectorService{
    private _userUrl="https://api.github.com/users/octocat";
    private _followerUrl="https://api.github.com/users/octocat/followers";

    constructor(private _http:Http){
    }

    getUserProfile(){
        return this._http.get(this._userUrl)
            .map(response=> response.json()        
        );
    }

    getUserFollowers(){
        return this._http.get(this._followerUrl)
            .map(response=> response.json()        
        );
    }

}