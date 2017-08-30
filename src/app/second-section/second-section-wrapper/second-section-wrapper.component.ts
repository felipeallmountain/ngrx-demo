import { InitSecondSection } from './../store/second-section.actions';
import { ISecondSectionState } from './../store/second-section.store';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-section-wrapper',
  templateUrl: './second-section-wrapper.component.html',
  styleUrls: ['./second-section-wrapper.component.css']
})
export class SecondSectionWrapperComponent implements OnInit {

  constructor(
    private store: Store<ISecondSectionState>
  ) {}

  ngOnInit() {
    this.store.dispatch(new InitSecondSection(Math.random() * 10));
  }

}
