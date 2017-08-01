import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DexApiService} from './services/dex-api/dex-api.service';
import {CoreDiSharedConstants, coreSharedConstants} from './constants/core-shared.constants';
import { TranslateModule } from '@ngx-translate/core';
import { DialogSimple } from './messages-component/simplemessages.component';
import { DialogPopUp } from './messages-component/formpopup.component';
import { AngularMaterialModules } from './angularMaterial-component/angularMaterial-component';

@NgModule({
  declarations: [ DialogSimple,
  DialogPopUp
  ],
  entryComponents: [DialogSimple, 
  DialogPopUp],
  imports: [CommonModule, AngularMaterialModules],
  exports: [TranslateModule, DialogSimple, AngularMaterialModules],
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
