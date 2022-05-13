import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivityService } from '../activity.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tipo = new FormControl('');
  partecipanti = new FormControl('');
  prezzo = new FormControl('');

  constructor(private http: ActivityService) { }

  ngOnInit(): void {
  }

  sendActivity(){
    this.http.getActivity(this.tipo.value, this.partecipanti.value, this.prezzo.value).subscribe()
  }
}
