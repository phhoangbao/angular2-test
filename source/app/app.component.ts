/**
 * Created by Hoang Bao on 5/4/2016.
 */

import {Component} from 'angular2/core';
import {Input} from 'angular2/core';
import {Output} from "angular2/core";
import {EventEmitter} from "angular2/core";
import * as _ from "lodash";

@Component({
    selector: 'my-app-test',
    templateUrl: './app/app.html'
})

export class AppComponent {
    @Input() name : string;
    array:Array<number>;
    @Input() nameTest : string;

    bryanTest() {
        console.info("Test" + _.compact([0, 1, false, 2, '', 3]));
        _.compact([0, 1, false, 2, '', 3]);
        var myArray = ["Hello", "world"];

        _.forEach(myArray, function (v) {
            console.log("Element ", v);
        });
        
        this.array = [1, 2, 3, 1, 2, 3];

        var x = _.pull(this.array, 2, 3);
        console.log(this.array);

        this.name = "Hello world " + this.nameTest + this.bryanTest1();
        return x;
    }

    bryanTest1() {
        var array = [1, 2, 3, 1, 2, 3];
        return _.pull(array, 2, 3);
    }
}
