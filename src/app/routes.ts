import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { DetailsComponent } from "./pages/details/details.component";

const routeConfig: Routes = 
[
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page'
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details'
  }
]

export default routeConfig;