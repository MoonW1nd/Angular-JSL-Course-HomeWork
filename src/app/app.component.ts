import { Component } from '@angular/core';
import { places$ } from './data/index';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Weather';
  public places$: Observable<Place[]> = places$;
  public currentPlace: Place;
  public constructor() {
    const getFirstElem: Observable<Place[]> = this.places$.first();
    getFirstElem.subscribe(
      (ev: any): any => {
        this.currentPlace = ev[0];
      }
    );
  }
}
