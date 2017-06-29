System.register(['angular2/core', './githubConnector.service', 'angular2/http', "rxjs/Rx"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, githubConnector_service_1, http_1, Rx_1;
    var githubComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (githubConnector_service_1_1) {
                githubConnector_service_1 = githubConnector_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            githubComponent = (function () {
                function githubComponent(_gitConnector) {
                    this._gitConnector = _gitConnector;
                    this.user = {};
                    this.followers = [];
                    this.loadNow = true;
                }
                githubComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var userProfile = this._gitConnector.getUserProfile();
                    var followers = this._gitConnector.getUserFollowers();
                    Rx_1.Observable.forkJoin(userProfile, followers)
                        .subscribe(function (resp) {
                        _this.user = resp[0];
                        _this.loadNow = false;
                        _this.followers = resp[1];
                        // console.log(resp);
                    });
                };
                githubComponent = __decorate([
                    core_1.Component({
                        selector: 'github',
                        templateUrl: 'app/github.template.html',
                        styleUrls: ["app/styles.css"],
                        providers: [githubConnector_service_1.githubConnectorService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [githubConnector_service_1.githubConnectorService])
                ], githubComponent);
                return githubComponent;
            }());
            exports_1("githubComponent", githubComponent);
        }
    }
});
//# sourceMappingURL=githubComponent.component.js.map