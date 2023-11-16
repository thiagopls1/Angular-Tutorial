import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../../services/housing.service';
import { HousingLocation } from '../../interfaces/housinglocation';
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
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);

    this.housingService.getHousingLocationById(housingLocationId).then((housingLocation) => {
      this.housingLocation = housingLocation;
    });
    // this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
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