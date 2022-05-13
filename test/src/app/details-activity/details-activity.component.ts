import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-details-activity',
  templateUrl: './details-activity.component.html',
  styleUrls: ['./details-activity.component.css']
})
export class DetailsActivityComponent implements OnInit {

  element !: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: ActivityService
  ) {}

  ngOnInit(): void {
    const key = this.activatedRoute.snapshot.paramMap.get('id');
    this.element = this.http.getElement(key!)!
    console.log(this.element)
  }
}
