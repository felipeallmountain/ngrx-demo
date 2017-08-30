import { FIRST_SECTION_LANDED, LandFirstSectionAction } from './../store/first-section.actions';
import { IFirstSectionState } from './../store/first-section.store';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {

  constructor(
    private store: Store<IFirstSectionState>
  ) {}

  ngOnInit() {
    this.store.dispatch(new LandFirstSectionAction('fuaaa'));
  }

}
