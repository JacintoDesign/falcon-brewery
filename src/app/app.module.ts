import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faTwitter, faFacebookF  } from '@fortawesome/free-brands-svg-icons';

import { AboutComponent } from './components/about/about.component';
import { BeerComponent } from './components/beer/beer.component';
import { SocialComponent } from './components/social/social.component';
import { EventsComponent } from './components/events/events.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';

import { NavMenuComponent } from './shared/components/nav-menu/nav-menu.component';

library.add(faInstagram, faTwitter, faFacebookF);

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'beer', component: BeerComponent },
  { path: 'on-tap', component: SocialComponent },
  { path: 'events', component: EventsComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BeerComponent,
    SocialComponent,
    EventsComponent,
    ContactComponent,
    HomeComponent,
    NavMenuComponent, 
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FontAwesomeModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
