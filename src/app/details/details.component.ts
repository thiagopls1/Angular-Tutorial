import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule 
  ],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }

  submitApplication(){
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );
  }

}

// import { Component, inject } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ActivatedRoute } from '@angular/router';
// import { HousingService } from '../housing.service';
// import { HousingLocation } from '../housinglocation';

// @Component({
//   selector: 'app-details',
//   standalone: true,
//   imports: [CommonModule],
//   template: `
    
//   `,
//   styleUrls: ['./details.component.css'],
// })
// export class DetailsComponent {

//   route: ActivatedRoute = inject(ActivatedRoute);
//   housingService = inject(HousingService);
//   housingLocation: HousingLocation | undefined;

//   constructor() {
//     const housingLocationId = Number(this.route.snapshot.params['id']);
//     this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
//   }

// }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/