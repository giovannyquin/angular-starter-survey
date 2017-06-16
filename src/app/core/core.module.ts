import { NgModule } from  '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DexCoreService } from './shared/services/dex-core.service'

// Components
import { DexHeaderComponent } from './components/dex-header/dex-header.component';
import { DexBodyComponent } from './components/dex-body/dex-body.component';
import { DexHomeComponent } from './components/dex-home/dex-home.component';

@NgModule({
  declarations: [ DexHeaderComponent, DexBodyComponent, DexHomeComponent ],
  imports: [
    NgbModule,
    CommonModule,
    RouterModule.forRoot([
      { path: '',      component: DexHomeComponent },
      { path: 'home',  component: DexHomeComponent }
    ])
  ],
  providers: [DexCoreService],
  exports: [ DexHeaderComponent, DexBodyComponent ]
})
export class DexCoreModule {}
