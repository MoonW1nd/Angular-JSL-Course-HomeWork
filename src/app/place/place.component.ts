import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../common/services/places.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
  public places$: Observable<Place[]>;
  public currentImage: string;
  public filterQuery: string;

  public constructor(
    private _PlacesService: PlacesService
  ) {}

  public search(place: Place): void {
    this.currentImage = place.images.img1;
    this._PlacesService.currentPlace = place;
    this._PlacesService.setCurrentPlace(place);
  }

  public ngOnInit(): void {
    this.places$ = this._PlacesService.getPlaces();
    this.currentImage = this._PlacesService.currentPlace.images.img1;
  }
  // tslint:disable-next-line
  public setFilterQuery(_eventTarget: any): void {
    this.filterQuery = _eventTarget.outerText;
    const selectPlaces: HTMLCollection = document.getElementsByClassName('places-filter select');

    if (selectPlaces.length !== 0) {
      selectPlaces[0].classList.remove('select');
    }
    _eventTarget.classList.add('select');
  }
}
