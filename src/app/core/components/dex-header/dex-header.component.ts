import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'dex-header',
  templateUrl: './dex-header.html',
  styles: [require('./dex-header.scss')]
})
export class DexHeaderComponent implements OnInit {

  constructor(private translateService: TranslateService){

  }
  public ngOnInit() {
    console.log('hello `Dex Header` component');
  }


  changeLanguage(lang: string): void{
    this.translateService.use(lang);
  }
}
