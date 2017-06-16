import { Injectable } from '@angular/core';
import { DexApiService } from '../../../shared/index';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DexCoreService {
  constructor(private _dexApiService: DexApiService){

  }

  getQuestionsSurvey<T> (url): Observable<T> {
    return this._dexApiService.getResource(url);
  }
}
