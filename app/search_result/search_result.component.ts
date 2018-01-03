/**
 * Created by adam on 18/12/2016.
 */
import { Component, Input, OnInit } from '@angular/core';
import { DocResultEntry } from '../_model/SearchResults';
import { KIND_PARAMETERS } from './kind_parameters';
let _ = require('lodash');


// generic Component
@Component({
  selector: 'search-result',
  template: require('./search_result.component.html'),
})
export class SearchResultComponent implements OnInit {
  @Input() item: DocResultEntry;
  @Input() kind: string;
  parameters: any;

  constructor() { }
  ngOnInit() {
    // for (let parameters of KIND_PARAMETERS) {
    //   if (this.item.source.collection === parameters.collection) {
    //     this.parameters = parameters;
    //     break;
    //   }
    // }
    this.parameters = {
      // docType: 'org/company',
      label: {
        'places': 'מקום',
        'familyNames': 'שם משפחה',
        'movies': 'סרט',
        'personalities': 'אישיות',
        'photoUnits': 'תמונה',
        'unknown': 'לא ידוע'
      }[this.item.source.collection],
      // labelField: 'details.type',
      mainNameField: 'title_he'
      // secondaryNameField: 'id',
      // amountField: 'received_amount',
      // firstItemField: 'details.goal',
      // firstItemLabel: 'מטרה',
      // secondItemField: 'details.city',
      // secondItemLabel: 'כתובת',
      // minYearField: 'min_year',
      // maxYearField: 'max_year',
    };
  }

  get(field: string, default_value?: string) {
    if (field) {
      return _.get(this.item.source, field.split('.')) || default_value || '';
    }
    return default_value || '';
  }
}
