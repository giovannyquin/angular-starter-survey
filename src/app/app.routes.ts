import { Routes } from '@angular/router';
// import { HomeComponent } from './home';
// import { DexHomeComponent } from './core/index'
import { AboutComponent, NoContentComponent } from './core/index';

// import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'detail', loadChildren: './core/components/+detail#DetailModule'},
  { path: 'barrel', loadChildren: './core/components/+barrel#BarrelModule'},
  { path: '**',    component: NoContentComponent },
];
