import { Component, OnInit } from '@angular/core';
import { AppState } from '../../../app.service';

@Component({
  selector: 'dex-body',
  templateUrl: './dex-body.html',
  styles: [require('./dex-body.scss')]
})
export class DexBodyComponent implements OnInit {
  constructor(public appState: AppState) {

  }

  public ngOnInit() {
    console.log('hello `Dex Body` component');
  }
}
