import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dex-header',
  templateUrl: './dex-header.html',
  styles: [require('./dex-header.scss')]
})
export class DexHeaderComponent implements OnInit {
  public ngOnInit() {
    console.log('hello `Dex Header` component');
  }
}
