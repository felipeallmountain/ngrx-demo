import { environment } from './../environments/environment';
import { appReducerMap } from './store/app.store';
import { FirstSectionModule } from './first-section/first-section.module';
import { SecondSectionModule } from './second-section/second-section.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { routes } from './routes';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FirstSectionModule,
    SecondSectionModule,
    RouterModule.forRoot( routes ),
    StoreModule.forRoot( appReducerMap ),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
