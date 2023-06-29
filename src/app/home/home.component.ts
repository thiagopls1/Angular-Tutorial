// import { Component, Inject, inject } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { HousingLocationComponent } from '../housing-location/housing-location.component';
// import { HousingLocation } from "../housinglocation";
// import { HousingService } from '../housing.service'

// @Component({
//   selector: 'app-home', // A tag do componente
//   standalone: true,
//   imports: [ CommonModule, HousingLocationComponent],
//   templateUrl: './home.component.html', // Css do componente
//   styleUrls: ['./home.component.css'] // Html do componente
// })

// export class HomeComponent {
//   housingLocationList: HousingLocation[] = [];
//   housingService: HousingService = inject(HousingService);

//   constructor() {
//     this.housingLocationList = this.housingService.getAllHousingLocations();
//   }

// }

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent
  ],
  templateUrl: './home.component.html', // Css do componente
  styleUrls: ['./home.component.css'],
})

export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/