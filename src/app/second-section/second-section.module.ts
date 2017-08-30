import { secondSectionReducer } from './store/second-section.store';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondSectionWrapperComponent } from './second-section-wrapper/second-section-wrapper.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('second', secondSectionReducer)
  ],
  declarations: [SecondSectionWrapperComponent]
})
export class SecondSectionModule { }
