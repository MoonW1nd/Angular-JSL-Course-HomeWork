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

  @Output()
  public mySelect: EventEmitter<Place> = new EventEmitter;
  public search(place: Place): void {
    this.currentImage = place.images.img1;
    this.mySelect.emit(place);
  }
}
