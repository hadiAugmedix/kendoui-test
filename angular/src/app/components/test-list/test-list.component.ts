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
      { label: 'Check uncheck select box', slug: 'check-uncheck-select-box' }
    ]
  }

}
