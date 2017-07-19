import { NgModule } from  '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { DynamicComponentModule } from 'angular2-dynamic-component/index';
import { NgxDynamicTemplateModule } from 'ngx-dynamic-template';
import { DexSharedModule } from '../shared/dex-shared.module';

import { DexCoreService } from './shared/services/dex-core.service';

// Components
import { DexHeaderComponent } from './components/dex-header/dex-header.component';
import { DexBodyComponent } from './components/dex-body/dex-body.component';
import { DexHomeComponent } from './components/dex-home/dex-home.component';
import { AboutComponent } from './components/about';
import { HomeComponent } from './components/home';
import { NoContentComponent } from './components/no-content';
import { XLargeDirective } from './components/home/x-large';

@NgModule({
  declarations: [ DexHeaderComponent,
    DexBodyComponent,
    DexHomeComponent,
    AboutComponent,
    HomeComponent,
    NoContentComponent,
    XLargeDirective
  ],
  imports: [
    NgbModule,
    CommonModule,
    RouterModule.forRoot([
      { path: '',      component: DexHomeComponent },
      { path: 'home',  component: DexHomeComponent }
    ]),
    NgxDynamicTemplateModule.forRoot({routes: [
      { path: '',      component: DexHomeComponent },
      { path: 'home',  component: DexHomeComponent }
    ]}),
    DexSharedModule
  ],
  providers: [DexCoreService],
  exports: [ DexHeaderComponent, DexBodyComponent ]
})
export class DexCoreModule {}
