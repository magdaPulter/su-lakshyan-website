import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideNgcCookieConsent } from 'ngx-cookieconsent';
import { cookieConfig } from './cookieConfig';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideNgcCookieConsent(cookieConfig),
  ],
};
