import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placesFilter'
})
export class PlacesFilterPipe implements PipeTransform {

  public transform(places: Place[], searchQuery?: string): Place[] {
    if (!searchQuery || searchQuery === 'All') {
      return places;
    }

    return places.filter((place: Place) => place.type === searchQuery );
  }

}
