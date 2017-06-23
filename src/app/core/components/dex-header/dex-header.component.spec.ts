import { NO_ERRORS_SCHEMA } from '@angular/core';
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
import { By } from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { MockBackend } from '@angular/http/testing';

/**
 * Load the implementations that should be tested.
 */
import { AppState } from '../../../app.service';
import { DexHeaderComponent } from './dex-header.component';

describe(`DexHeader`, () => {
  let comp: DexHeaderComponent;
  let fixture: ComponentFixture<DexHeaderComponent>;

  /**
   * async beforeEach.
   */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DexHeaderComponent],
      schemas: [NO_ERRORS_SCHEMA],
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
        AppState
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
    fixture = TestBed.createComponent(DexHeaderComponent);
    comp = fixture.componentInstance;

    /**
     * Trigger initial data binding.
     */
    fixture.detectChanges();
  });

  it('should charge the html ', () => {
    let de: DebugElement;
    let el: HTMLElement;
    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('.navbar-brand'));
    el = de.nativeElement;
    fixture.detectChanges();
    expect(el.textContent).toContain('Deloitte-Dex');
  });

  it('should have default data', () => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    comp.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  });

});
