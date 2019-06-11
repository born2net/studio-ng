import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {IConfig} from '../models/config.interface';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    configUrl = `${environment.apiUrl}config.json`;

    constructor() {
    }

    // constructor(private _http: HttpClient) { }

    getConfig(): any {
        return {};
        // return this._http.get<IConfig>(this.configUrl);
    }
}
