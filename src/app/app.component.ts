import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'studio-ng';

    constructor() {
        const abc = 22;
        console.log(abc);
    }
}
