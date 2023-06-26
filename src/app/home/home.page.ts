import { Component, DoCheck, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, DoCheck {

  constructor() {}

  ngOnInit(): void {
    initializeApp(environment.firebase);
    const auth = getAuth();
    console.log(auth.currentUser)
  }

  ngDoCheck(): void {
    console.log('docheck');
  }

}
