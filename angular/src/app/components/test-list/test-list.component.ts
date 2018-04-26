import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.scss']
})
export class TestListComponent implements OnInit {

  public menuItems: Array<{ label: String, slug: String }>;

  constructor() { }

  ngOnInit() {
    this.menuItems = [
      { label: 'Example component', slug: 'example' },
      { label: 'Sticky table header', slug: 'sticky-table-header' },
      { label: 'Multiple column sorting', slug: 'multiple-column-sort' },
      { label: 'Sticky multiple table row on left', slug: 'sticky-multiple-table-row-on-left' },
      { label: 'Remote data binding', slug: 'remote-data-bind' },
      { label: 'Month picker', slug: 'month-picker' },
      { label: 'Check uncheck select box', slug: 'check-uncheck-select-box' },
      { label: 'Date range', slug: 'date-range' },
      { label: 'Confirm box', slug: 'confirm-box' },
      { label: 'Nested table layout', slug: 'nested-table' },
      { label: 'Read more or less in table cell', slug: 'read-more-less-in-table-cell' },
      { label: 'Add row in fly', slug: 'add-row-in-fly' },
      { label: 'Vertical progress slider', slug: 'vertical-progress-slider' },
      { label: 'Actions within popup', slug: 'actions-within-popup' },
      { label: 'Multiple popup instance', slug: 'multiple-popup-instance' },
      { label: 'Popup from table cell', slug: 'popup-from-table-cell' },
      { label: 'Time picker', slug: 'time-picker' },
      { label: 'List drag n sort', slug: 'list-drag-sort' },
      { label: 'SCP: Schedule modal', slug: 'scp-schedule-modal' }
    ];
  }

}
