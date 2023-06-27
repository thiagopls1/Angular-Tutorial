// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent,
  {providers: [provideProtractorTestingSupport()]})
  .catch(err => console.error(err));
// platformBrowserDynamic().bootstrapModule(AppModule)
  // .catch(err => console.error(err));
