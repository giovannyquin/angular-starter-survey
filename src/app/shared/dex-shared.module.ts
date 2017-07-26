import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DexApiService} from './services/dex-api/dex-api.service';
import {CoreDiSharedConstants, coreSharedConstants} from './constants/core-shared.constants';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule],
  exports: [TranslateModule],
  providers: [
    DexApiService,
    {
      provide: coreSharedConstants,
      useValue: CoreDiSharedConstants
    }
  ]
})
export class DexSharedModule {
}
