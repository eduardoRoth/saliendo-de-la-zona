import {
  ApplicationConfig,
  provideExperimentalZonelessChangeDetection,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter, RouteReuseStrategy } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { IonicRouteStrategy } from '@ionic/angular';
import { provideIonicAngular } from '@ionic/angular/standalone';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    //provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
  ],
};
