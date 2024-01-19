import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Prime Components
import { ButtonModule } from 'primeng/button';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Configuració del locale de la app
import caESvalencia from "@angular/common/locales/ca-ES-valencia";
import localeFrCa from "@angular/common/locales/fr-CA";

import { registerLocaleData } from '@angular/common';

registerLocaleData(caESvalencia);
registerLocaleData(localeFrCa);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    SharedModule,
    BrowserAnimationsModule

  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ca-ES-valencia' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
