import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateService } from '@ngx-translate/core';
import { Observable, catchError, of } from 'rxjs';

export class AppTranslationLoader implements TranslateLoader {
  constructor(private http: HttpClient, private translate: TranslateService) {}

  getTranslation(lang: string): Observable<any> {
    return this.http
      .get<any>('assets/i18n/' + lang + '.json')
      .pipe(catchError((e) => of([])));
  }

  langChange(value: string) {
    this.translate.use(value);
    this.getTranslation(value);
  }
}
export const APP_TRANSLATION_LOADER_PROVIDER = {
  provide: TranslateLoader,
  useClass: AppTranslationLoader,
  deps: [HttpClient],
};
