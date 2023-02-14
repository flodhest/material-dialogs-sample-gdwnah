import {Component} from '@angular/core';
import { DialogsService } from './dialogs/dialogs.service';

@Component({
  selector: 'material-app',
  templateUrl: 'app.component.html'
})
export class AppComponent { 
  public result: any;
  
  constructor(private dialogsService: DialogsService) { }
  
  public openDialog() {
    this.dialogsService
      .confirm('Confirm Dialog', 'Are you sure you want to do this?')
      .subscribe(res => this.result = res);
  }
}

/**
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */