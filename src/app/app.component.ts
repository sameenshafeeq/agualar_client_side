import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from './student-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  posts:any;
  title = 'Employee_Api_ANgular';
  constructor (private service :StudentServiceService) { }
  ngOnInit() {
    this.service.getStudentsName()
    .subscribe(response => {
      this.posts = response;
    });
  }
}
 