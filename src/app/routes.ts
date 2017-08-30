import { SecondSectionWrapperComponent } from './second-section/second-section-wrapper/second-section-wrapper.component';
import { Routes, CanActivate } from '@angular/router';
import { WrapperComponent } from './first-section/wrapper/wrapper.component';


export const routes: Routes = [
  { path: '',
    redirectTo: '/first',
    pathMatch: 'full'
  },
  {
    path: 'first',
    component: WrapperComponent
  },
  {
    path: 'second',
    component: SecondSectionWrapperComponent
  },
  { path: '**', redirectTo: '/first' }
];
