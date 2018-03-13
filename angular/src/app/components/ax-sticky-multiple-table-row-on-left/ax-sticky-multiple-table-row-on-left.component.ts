import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { UserInterface } from '../../interface/user.interface';

@Component({
  selector: 'app-ax-sticky-multiple-table-row-on-left',
  templateUrl: './ax-sticky-multiple-table-row-on-left.component.html',
  styleUrls: ['./ax-sticky-multiple-table-row-on-left.component.scss']
})
export class AxStickyMultipleTableRowOnLeftComponent implements OnInit {

  public users: UserInterface[];

  constructor(private _userService: UsersService) {}

  ngOnInit() {
    this._userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

}
