import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent {
  @Input()
  public places$: Place[];
  public currentImage: string = './assets/images/hotels/lighthouse/1.jpg';
  public filterQuery: string;

  @Output()
  public mySelect: EventEmitter<Place> = new EventEmitter;
  public search(place: Place): void {
    this.currentImage = place.images.img1;
    this.mySelect.emit(place);
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
