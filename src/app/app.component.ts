import { Component } from '@angular/core';

import { TestService } from './test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private svc : TestService, private httpClient: HttpClient){
    svc.printToConsole("Arun");
  }

  ngOnInit() {
    let observable=this.httpClient.get('https://api.github.com/users/koushikkothagal');
    observable.subscribe( (response)  => console.log(response) );
  }
 
}
