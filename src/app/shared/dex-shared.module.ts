import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DexApiService} from './services/dex-api/dex-api.service';
import {CoreDiShared, CoreShared} from './constants/core-shared.constants';

@NgModule({
  imports: [CommonModule],
  providers: [
    DexApiService,
    {
      provide: CoreShared,
      useValue: CoreDiShared
    }
  ]
})
export class DexSharedModule {
}
