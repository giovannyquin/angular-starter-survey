import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DexApiService } from './services/dex-api/dex-api.service';

@NgModule({
  imports: [CommonModule],
  providers: [DexApiService]
})
export class DexSharedModule {}
