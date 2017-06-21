import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app works!';

    constructor(){

    }

    ngOnInit(){
        firebase.initializeApp({
            apiKey: "AIzaSyAR-aKN0fzSHIHDXvfHYSnQ0rOlb4Dgwsc",
            authDomain: "ng-recipe-book-d8cbd.firebaseapp.com"
        });
    }

}
