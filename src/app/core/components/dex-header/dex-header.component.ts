import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { Router } from '@angular/router';



@Component({
  selector: 'dex-header',
  templateUrl: './dex-header.html',
   styleUrls: [
    'dex-header.scss'
  ]
})
export class DexHeaderComponent implements OnInit {

  constructor(private translateService: TranslateService,
  public router:Router){

  }
  public ngOnInit() {
    console.log('hello `Dex Header` component');
  }

  btnClick(option) {
    if(option == 'barrel'){
        this.router.navigate(['./barrel']);}

     if(option == 'home'){
        this.router.navigate(['./home']);}

     if(option == 'detail'){
        this.router.navigate(['./detail']);}

     if(option == 'about'){
        this.router.navigate(['./about']);}

  };


  changeLanguage(lang: string): void{
    this.translateService.use(lang);
  }
}
