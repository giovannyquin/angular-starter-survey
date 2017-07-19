import {Injectable, Inject} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {CoreSharedConstants} from '../../constants/core-shared.constants';
import {ICoreSharedConstants} from '../../models/core-shared.model';

// Rxjs operators
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class DexApiService {
  constructor(@Inject(CoreSharedConstants) private config: ICoreSharedConstants,
              private _http: Http) {
  }

  public getResource<T>(url: string): Observable<T> {
    return this._http.get(this.config.dexApiUrl + url)
      .map((response: Response): T => {
        return <T> response.json();
      })
      .do(((data) => {
        console.log('do getResource');
      }))
      .catch(this.handleError);
  }

  public saveResource<T>(url: string, body: Object, token?: string): Observable<T> {
    let header: Headers = new Headers(
      {
        'Authorization': token,
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
      });
    let options: RequestOptions = new RequestOptions({headers: header, withCredentials: false});
    return this._http
      .post(this.config.dexApiUrl + url, body, options)
      .map((response: Response): T => {
        return <T> response.json();
      })
      .do(((data) => {
        console.log('do getResource');
      }))
      .catch(this.handleError);
  }

  public updateResource<T>(url: string, body: Object, token?: string): Observable<T> {
    let header: Headers = new Headers(
      {
        'Authorization': token,
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
      });
    let options: RequestOptions = new RequestOptions({headers: header, withCredentials: false});
    return this._http
      .put(`${this.config.dexApiUrl}${url}`, body, options)
      .map((response: Response): T => {
        return <T> response.json();
      })
      .do(((data): void => {
        console.log('do getResource');
      }))
      .catch(this.handleError);
  }

  public deleteResource<T>(url: string, body?: Object, token?: string): Observable<T> {
    let headers: Headers = new Headers(
      {
        'Authorization': 'Bearer ' + token,
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
      });
    let options: RequestOptions = new RequestOptions({headers: headers, body: body});
    return this._http.delete(`${this.config.dexApiUrl}${url}`, options)
      .map((response: Response): T => {
        return <T> response.json();
      })
      .do(((data): void => {
        console.log('do getResource');
      }))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.log('error Api ', error);
    return Observable.throw(error.json().error || 'Api Error');
  }
}
