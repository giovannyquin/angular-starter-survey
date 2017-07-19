import { Http } from '@angular/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppDiConstants } from './app.constants';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, AppDiConstants.translateApi, AppDiConstants.fileTypeTranslate);
}
