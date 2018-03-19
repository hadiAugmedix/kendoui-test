import { Component, OnInit } from '@angular/core';

// for service
import {
  WindowService,
  WindowRef,
  WindowCloseResult
} from '@progress/kendo-angular-dialog';

@Component({
  selector: 'app-ax-actions-with-popup',
  templateUrl: './ax-actions-with-popup.component.html',
  styleUrls: ['./ax-actions-with-popup.component.scss']
})
export class AxActionsWithPopupComponent implements OnInit {

  public windowOpened: Boolean = false;

  constructor(private windowService: WindowService) { }

  ngOnInit() {
  }

  openWindow() {
    this.windowOpened = true;
  }

  closeWindow() {
    this.windowOpened = false;
  }

  submit() {
    this.windowOpened = false;
  }

  openWindowAsService() {
    const window: WindowRef = this.windowService.open({
      title: 'My Window',
      content: 'My Content!',
      width: 450,
      height: 200
    });

    window.result.subscribe((result) => {
      if (result instanceof WindowCloseResult) {
        console.log('Window was closed!');
      }
    });
  }

}
