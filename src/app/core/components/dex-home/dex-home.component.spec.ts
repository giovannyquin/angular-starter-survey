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

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
  inject,
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';
import { Component } from '@angular/core';
import {
  BaseRequestOptions,
  ConnectionBackend,
  Http
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

/**
 * Load the implementations that should be tested.
 */
import { AppState } from '../../../app.service';
import { DexCoreService } from '../../shared/services/dex-core.service';
import { DexHomeComponent } from './dex-home.component';
// import { DynamicComponentModule } from 'angular2-dynamic-component/';
 import { NgxDynamicTemplateModule } from 'ngx-dynamic-template';

describe(`Home`, () => {
  let comp: DexHomeComponent;
  let fixture: ComponentFixture<DexHomeComponent>;

  /**
   * async beforeEach.
   */
  beforeEach(async(() => {
    // let DexCoreServiceStub = {
    //   getQuestionsSurvey: () => {
    //     return {
    //       pages: [
    //         {
    //           questions: [
    //             {
    //               typ: 'matrix',
    //               name: 'Quality',
    //               title: '<span>Please indicate if you <b>agree</b> or <b>disagree</b>' +
    //               'with the following statements</span>',
    //               columns: [
    //                 {
    //                   value: 1,
    //                   text: '<span><b>Strongly Disagree</b></span>'
    //                 }
    //               ],
    //               rows: [
    //                 {
    //                   value: 'affordable',
    //                   text: 'Product is affordable'
    //                 },
    //                 {
    //                   value: 'does what it claims',
    //                   text: 'Product does what it claims'
    //                 },
    //                 {
    //                   value: 'better then others',
    //                   text: 'Product is better than other products on the market'
    //                 },
    //                 {
    //                   value: 'easy to use',
    //                   text: 'Product is easy to use'
    //                 }
    //               ]
    //             },
    //             {
    //               type: 'rating',
    //               name: 'satisfaction',
    //               title: 'How satisfied are you with the Product?'
    //             },
    //             {
    //               type: 'rating',
    //               name: 'recommend friends',
    //               visibleIf: '{satisfaction} > 3',
    //               title: 'How likely are you to recommend the Product to a friend or co-worker?'
    //             },
    //             {
    //               type: 'comment',
    //               name: 'suggestions',
    //               title: 'What would make you more satisfied with the Product?'
    //             },
    //             {
    //               type: 'checkbox',
    //               name: 'words',
    //               title: 'Which of the words would you use to describe our products?',
    //               isRequired: true,
    //               colCount: 2,
    //               choices: [
    //                 {
    //                   value: '<div class="form-check"><label class="form-check-label"><input type="checkbox" ' +
    //                   'class="form-check-input" (change)="onClick($event, choices.id, choices.name)">Reliable</label>' +
    //                   '</div>',
    //                   id: 0,
    //                   name: 'chk-0'
    //                 }
    //               ]
    //             }
    //           ]
    //         }
    //       ]
    //     };
    //   }
    // };
    let DexCoreServiceStub = {
      getQuestionsSurvey: () => {
        return { };
      }
    };
    TestBed.configureTestingModule({

      declarations: [ DexHomeComponent, NgxDynamicTemplateModule.forRoot({}) ],
      imports: [ ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        BaseRequestOptions,
        MockBackend,
        {
          provide: Http,
          useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        AppState,
        DexCoreService
      ]
    })
    /**
     * Compile template and css.
     */
      .compileComponents();
  }));

  /**
   * Synchronous beforeEach.
   */
  beforeEach(() => {
    fixture = TestBed.createComponent(DexHomeComponent);
    comp = fixture.componentInstance;

    /**
     * Trigger initial data binding.
     */
    fixture.detectChanges();
  });

  /*it('should have default data', () => {
    expect(comp.modelToSend).toEqual([]);
  });*/

  /*it('should log ngOnInit', () => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    comp.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  });*/

});
