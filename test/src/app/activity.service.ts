import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  constructor(private http: HttpClient) { }
  activity: any  = []
  getActivity(tipo: string, partecipanti: string, prezzo: number){
    return this.http.get(`http://www.boredapi.com/api/activity?type=${tipo}&${partecipanti}&${prezzo}`)
    .pipe(
      tap(response => this.activity.push)
    )
  }
  getElement(key: string){
    const elemento = this.activity.find(elem => elem.key == key)
    console.log(elemento)
    return elemento
  }
}
