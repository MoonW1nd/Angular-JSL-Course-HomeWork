import { Component } from '@angular/core';
import { places$ } from './data/index';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Weather';
  public places$: Observable<Place[]> = places$;
  public currentPlace: Place;
}
