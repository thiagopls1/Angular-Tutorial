import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HousingService {


    url: string = `${environment.apiUrl}/locations`;

  async getAllHousingLocations(): Promise<HousingLocation[]>{
    // console.log(process.env)
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined > {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {}
  }

  submitApplication(firstName:string, lastName: string, email: string){
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}`);
  }
}
