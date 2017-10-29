import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/first';

const data: Place[] = [
  {
    images: {
      img1: './assets/images/hotels/lighthouse/1.jpg',
      img2: './assets/images/hotels/lighthouse/2.jpg'
    },
    address: '1111 Main st',
    phone:  3238452124,
    weather: {
      title: 'Cloudy',
      icon: 'cloud',
      water: 11,
      temperature: 15
    },
    social_info: {
      title: 'You are always alone here',
      img: './assets/images/hotels/lighthouse/2.jpg',
      followers: 50,
      following: 12
    },
    type: 'Hotel'
  },
  {
    images: {
      img1: './assets/images/hotels/resort/1.jpg',
      img2: './assets/images/hotels/resort/2.jpg'
    },
    address: '4321 Autumn st',
    phone:  2785452123,
    weather: {
      title: 'Sunny',
      icon: 'sun',
      water: 22,
      temperature: 27
    },
    social_info: {
      title: 'Best place in the world',
      img: './assets/images/hotels/resort/2.jpg',
      followers: 2560,
      following: 212
    },
    type: 'Hotel'
  },
  {
    images: {
      img1: './assets/images/hotels/fishing1/1.jpg',
      img2: './assets/images/hotels/fishing1/2.jpg'
    },
    address: '3321 Elm St',
    phone:  4521523654,
    weather: {
      title: 'Cloudy',
      icon: 'cloud',
      water: 14,
      temperature: 18
    },
    social_info: {
      title: 'Catch the biggest',
      img: './assets/images/hotels/fishing1/2.jpg',
      followers: 254,
      following: 22
    },
    type: 'Fishing'
  },
  {
    images: {
      img1: './assets/images/hotels/fishing2/1.jpg',
      img2: './assets/images/hotels/fishing2/2.jpg'
    },
    address: '7123 Camelot Ave',
    phone:  7854521245,
    weather: {
      title: 'Rainy',
      icon: 'rain',
      water: 15,
      temperature: 18
    },
    social_info: {
      title: 'Only nature and you',
      img: './assets/images/hotels/fishing2/2.jpg',
      followers: 218,
      following: 56
    },
    type: 'Fishing'
  },
  {
    images: {
      img1: './assets/images/hotels/asia/1.jpg',
      img2: './assets/images/hotels/asia/2.jpg'
    },
    address: '4511 Breathfree st',
    phone:  5647814885,
    weather: {
      title: 'Sunny',
      icon: 'sun',
      water: 27,
      temperature: 35
    },
    social_info: {
      title: 'Follow your dream',
      img: './assets/images/hotels/asia/2.jpg',
      followers: 6544,
      following: 235
    },
    type: 'Tours'
  },
  {
    images: {
      img1: './assets/images/hotels/japan/1.jpg',
      img2: '../assets/images/hotels/japan/2.jpg'
    },
    address: '8989 Akutagava st',
    phone:  1245789944,
    weather: {
      title: 'Stormy',
      icon: 'storm',
      water: 18,
      temperature: 24
    },
    social_info: {
      title: 'Find your way',
      img: './assets/images/hotels/japan/2.jpg',
      followers: 3254,
      following: 254
    },
    type: 'Tours'
  },
  {
    images: {
      img1: './assets/images/hotels/spa/1.jpg',
      img2: './assets/images/hotels/spa/2.jpg'
    },
    address: '7321 Health st',
    phone:  4527546325,
    weather: {
      title: 'Cloudy',
      icon: 'cloud',
      water: 22,
      temperature: 24
    },
    social_info: {
      title: 'Relax and enjoy',
      img: './assets/images/hotels/spa/2.jpg',
      followers: 1245,
      following: 56
    },
    type: 'Health'
  }
];


@Injectable()
export class PlacesService {
  public currentPlaces: Place;
  public currentPlaces$: Observable<Place>;
  public setDefaultPlaces(places$: Observable<Place[]>): void {
    places$.first().subscribe(
      (ev: Place[]): void => {
        this.currentPlaces = ev[0];
      }
    );
  }
  public getPlaces(): Observable<Place[]> {
    return Observable.of(data)
      .delay(2000);
  }
}
