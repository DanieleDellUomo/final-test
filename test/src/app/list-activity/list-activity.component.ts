import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-list-activity',
  templateUrl: './list-activity.component.html',
  styleUrls: ['./list-activity.component.css']
})
export class ListActivityComponent implements OnInit {

  localList = this.http.activity;

  constructor(private http: ActivityService) { }

  ngOnInit(): void {
  }
}
