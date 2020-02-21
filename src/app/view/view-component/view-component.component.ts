import { Component, OnInit ,Input} from '@angular/core';

import { TestService } from '../../test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {

  @Input('userName') userName: string;

  response: any;

  constructor(private httpClient : HttpClient){
   
  }

  ngOnInit(): void {
  }

  search(){
    let observable=this.httpClient.get('https://api.github.com/users/'+this.userName);    
    observable.subscribe( (response)  => {
      console.log(response);
      this.response=response;
     } );
  }

}
