import {Component} from '@angular/core';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import {faStar as farStar1} from '@fortawesome/free-regular-svg-icons';
import {faStar as fasStar2} from '@fortawesome/free-solid-svg-icons';
import {List, Map} from 'immutable';

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
        const m = Map({abc: '1'});
        let myListA = List([]);
        let myListB = myListA.push(['Hello World']);
        console.log(myListB.toArray());

        // var map1 = Map({ a: 1, b: 2, c: 3 });
        // var map2 = map1.set('b', 50);


    }
}
