import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

// Rxjs operators
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class DexApiService {
  constructor(private _http: Http) {
  }

  getResource<T>(url: string): Observable<T> {
    return this._http.get(url)
      .map((response: Response) => {
        console.log('no error ', response.json());
        return <T> response.json();
      })
      .do((data => console.log(JSON.stringify(data))))
      .catch(this.handleError)
  }

  private handleError(error: Response) {
    console.log('error Api ', error);
    return Observable.throw(error.json().error || 'Api Error');
  }
}
