import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { UserInterface } from '../../interface/user.interface';

import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-ax-sticky-multiple-table-row-on-left',
  templateUrl: './ax-sticky-multiple-table-row-on-left.component.html',
  styleUrls: ['./ax-sticky-multiple-table-row-on-left.component.scss']
})
export class AxStickyMultipleTableRowOnLeftComponent implements OnInit {

  public gridView: GridDataResult;
  public pageSize = 5;
  public skip = 0;
  private data: Object[];

  public users: UserInterface[];

  constructor(private _userService: UsersService) {

  }

  ngOnInit() {
    this._userService.getUsers().subscribe(data => {
      this.users = data;

      this.loadUsers();
    });
  }

  public pageChange(event: PageChangeEvent): void {
    console.log(event);
    this.skip = event.skip;
    this.loadUsers();
  }

  private loadUsers(): void {
    this.gridView = {
      data: this.users.slice(this.skip, this.skip + this.pageSize),
      total: this.users.length
    };
  }

}
