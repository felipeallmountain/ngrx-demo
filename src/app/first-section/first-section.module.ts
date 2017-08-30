import { firstSectionReducer } from './store/first-section.store';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './head/head.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('first', firstSectionReducer)
  ],
  declarations: [HeadComponent, WrapperComponent, BodyComponent, FooterComponent]
})
export class FirstSectionModule { }
