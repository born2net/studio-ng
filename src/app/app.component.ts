import {Component} from '@angular/core';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import {faStar as farStar1} from '@fortawesome/free-regular-svg-icons';
import {faStar as fasStar2} from '@fortawesome/free-solid-svg-icons';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'studio-ng';
    public faCoffee = faCoffee;
    public farStar1 = farStar1;
    public fasStar2 = fasStar2;
    public magicLevel;

    constructor() {
        const abc = 22;
        console.log(abc);
    }
}
