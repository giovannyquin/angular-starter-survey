import { Component } from '@angular/core';
import { AppState } from '../../../app.service';

@Component({
  selector: 'dex-body',
  templateUrl: './dex-body.html',
  styles: [require('./dex-body.scss')]
})
export class DexBodyComponent {
  constructor(public appState: AppState){

  }
}
