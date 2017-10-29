import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../common/services/places.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  public place: Place;

  public constructor(
    private _PlacesService: PlacesService
  ) {}

  public ngOnInit(): void {
    this.place = this._PlacesService.currentPlace;
    this._PlacesService._currentPlaces$$.subscribe(
      (place: Place) => {
        this.place = place;
      }
    );
  }
}
