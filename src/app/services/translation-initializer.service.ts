import { APP_INITIALIZER } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

export function AppTranslationInitializer(
  translate: TranslateService
): () => Observable<any> {
  return (): Observable<any> => {
    const defaulLang = 'sr';
    const savedLang = localStorage.getItem('app.lang');
    return translate.use(savedLang || defaulLang);
  };
}

export const APP_TRANSLATION_INITIALIZER = {
  provide: APP_INITIALIZER,
  useFactory: AppTranslationInitializer,
  multi: true,
  deps: [TranslateService],
};
