import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';
import { PlacesService } from './common/services/places.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title: string = 'Weather';
  public places$: Observable<Place[]>;
  public constructor(
    private _PlacesService: PlacesService
  ) {}
  public ngOnInit(): void {
    this.places$ = this._PlacesService.getPlaces();
    this._PlacesService.setDefaultPlaces(this.places$);
  }
}
