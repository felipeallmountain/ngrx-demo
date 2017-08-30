import { AppInitAction } from './store/app.actions';
import { IAppState } from './store/app.store';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private store: Store<IAppState>) {
    store.dispatch(new AppInitAction(Math.random() * 2));
  }
}
