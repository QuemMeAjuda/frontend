import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(): void {
    
    var config = {
      apiKey: "AIzaSyC2hacCQDMyeYRBtNqAaPkoxp_P7atu0Tg",
      authDomain: "e-quemmeajuda.firebaseapp.com",
      databaseURL: "https://e-quemmeajuda.firebaseio.com",
      projectId: "e-quemmeajuda",
      storageBucket: "e-quemmeajuda.appspot.com",
      messagingSenderId: "33626081602"
    };
    firebase.initializeApp(config);

  }
}
