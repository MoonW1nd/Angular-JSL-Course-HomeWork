import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlaceComponent } from './place/place.component';
import { SocialComponent } from './social/social.component';
import { WeatherComponent } from './weather/weather.component';
import { PlacesFilterPipe } from './common/pipes/places-filter.pipe';
import { PlacesService } from './common/services/places.service';

@NgModule({
  declarations: [
    AppComponent,
    PlaceComponent,
    SocialComponent,
    WeatherComponent,
    PlacesFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: PlacesService,
      useClass: PlacesService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
