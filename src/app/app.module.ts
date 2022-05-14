import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbButtonModule,
  NbDatepickerModule,
  NbIconModule,
  NbLayoutModule,
  NbPopoverModule,
  NbSpinnerModule,
  NbThemeModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HttpClientModule } from '@angular/common/http';
import { appReducer } from './store/app.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './store/app.effects';

import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { NbDateFnsDateModule } from '@nebular/date-fns'
import { ru } from 'date-fns/locale';

registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ app: appReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AppEffects]),
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbDatepickerModule.forRoot(),
    NbEvaIconsModule,
    NbLayoutModule,
    NbButtonModule,
    NbEvaIconsModule,
    NbIconModule,
    NbSpinnerModule,
    NbPopoverModule,
    HttpClientModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    NbDateFnsDateModule.forRoot({
      parseOptions: { locale: ru },
      formatOptions: { locale: ru },
    }),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ru' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
