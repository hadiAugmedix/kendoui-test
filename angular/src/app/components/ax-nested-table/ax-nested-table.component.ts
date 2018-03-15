import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { UserInterface } from '../../interface/user.interface';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-ax-nested-table',
  templateUrl: './ax-nested-table.component.html',
  styleUrls: ['./ax-nested-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AxNestedTableComponent implements OnInit {

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
