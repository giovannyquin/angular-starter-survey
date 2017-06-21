// import { NO_ERRORS_SCHEMA, Component } from '@angular/core';
// import {
//   inject,
//   async,
//   TestBed,
//   ComponentFixture
// } from '@angular/core/testing';
// import {
//   BaseRequestOptions,
//   ConnectionBackend,
//   Http
// } from '@angular/http';
// import { MockBackend } from '@angular/http/testing';
//
// import { AppState } from '../../../app.service';
// import { DexHomeComponent } from './dex-home.component';
// import { beforeEach } from 'selenium-webdriver/testing';
//
// describe('DexHomeComponent', () => {
//   let comp: DexHomeComponent;
//   let fixture: ComponentFixture<DexHomeComponent>;
//   /*
//    * async beforeEach
//    */
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [DexHomeComponent],
//       schemas: [NO_ERRORS_SCHEMA],
//       providers: [
//         BaseRequestOptions,
//         MockBackend,
//         {
//           provide: Http,
//           useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
//             return new Http(backend, defaultOptions);
//           },
//           deps: [MockBackend, BaseRequestOptions]
//         },
//         AppState
//       ]
//     })
//     /*
//      * Compile template and css.
//      */
//       .compileComponents();
//   }));
//   /*
//    * Synchronous beforeEach
//    */
//   beforeEach(() => {
//     fixture = TestBed.createComponent(DexHomeComponent);
//     comp = fixture.componentInstance;
//     /**
//      * Trigger initial data binding
//      */
//     fixture.detectChanges();
//   });
//
//   it('should charge the default data for vars', () => {
//     expect(comp.modelToSend).toEqual('');
//   });
// });

// import { NO_ERRORS_SCHEMA } from '@angular/core';
// import {
//   inject,
//   async,
//   TestBed,
//   ComponentFixture
// } from '@angular/core/testing';
// import { Component } from '@angular/core';
// import {
//   BaseRequestOptions,
//   ConnectionBackend,
//   Http
// } from '@angular/http';
// import { MockBackend } from '@angular/http/testing';
//
// /**
//  * Load the implementations that should be tested.
//  */
// import { AppState } from '../../../app.service';
// import { DexCoreService } from '../../shared/services/dex-core.service';
// import { DexHomeComponent } from './dex-home.component';
// import { DynamicComponentModule } from 'angular2-dynamic-component/';
//
// describe(`Home`, () => {
//   let comp: DexHomeComponent;
//   let fixture: ComponentFixture<DexHomeComponent>;
//
//   /**
//    * async beforeEach.
//    */
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ DexHomeComponent],
//       imports: [ DynamicComponentModule ],
//       schemas: [NO_ERRORS_SCHEMA],
//       providers: [
//         BaseRequestOptions,
//         MockBackend,
//         {
//           provide: Http,
//           useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
//             return new Http(backend, defaultOptions);
//           },
//           deps: [MockBackend, BaseRequestOptions]
//         },
//         AppState,
//         DexCoreService
//       ]
//     })
//     /**
//      * Compile template and css.
//      */
//       .compileComponents();
//   }));
//
//   /**
//    * Synchronous beforeEach.
//    */
//   beforeEach(() => {
//     fixture = TestBed.createComponent(DexHomeComponent);
//     comp = fixture.componentInstance;
//
//     /**
//      * Trigger initial data binding.
//      */
//     fixture.detectChanges();
//   });
//
//   it('should have default data', () => {
//     expect(comp.modelToSend).toEqual({ value: '' });
//   });
//
//   /*it('should log ngOnInit', () => {
//     spyOn(console, 'log');
//     expect(console.log).not.toHaveBeenCalled();
//
//     comp.ngOnInit();
//     expect(console.log).toHaveBeenCalled();
//   });*/
//
// });
