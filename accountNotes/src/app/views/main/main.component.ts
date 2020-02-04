import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private dService: DataService) { }

  ngOnInit() {
  }

  logIn(userName: string, passWord: string) {
    // We are going to compare password stored in our service.
    if (this.dService.checkCred(userName, passWord)) {
      alert('You are logged in!');
    } else {
      alert ('Try again');
    }
  }

}
