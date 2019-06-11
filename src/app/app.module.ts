import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {appReducers} from './store/reducers/app.reducers';
import {ConfigEffects} from './store/effects/config.effects';
import {UserEffects} from './store/effects/user.effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {UserService} from './services/user.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

// import { AppEffects } from './app.effects';

// ref: https://medium.com/frontend-fun/angular-ngrx-a-clean-and-clear-introduction-4ed61c89c1fc

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgbModule,
        FontAwesomeModule,
        StoreModule.forRoot(appReducers),
        EffectsModule.forRoot([UserEffects, ConfigEffects]),
        StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
        !environment.production ? StoreDevtoolsModule.instrument() : [],

    ],
    providers: [UserService, HttpClient],
    bootstrap: [AppComponent]
})
export class AppModule {
}
