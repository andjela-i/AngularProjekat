import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { TranslateLoader, TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss']
})

export class TranslateComponent implements TranslateLoader {

  stateOptions: any[];

  constructor(
    private http: HttpClient,
    private translate: TranslateService
  ){
    this.stateOptions=[
      {label:'Sprski',value:'sr'},
      {label:'Engleski',value:'en'}

    ]
  }

 getTranslation(lang: string): Observable<any> {
    return this.http.get<any>('assets/i18n/'+lang+'.json')
  }

langChange(value:string){
  this.translate.use(value);
  this.getTranslation(value)
}
  
}
export const APP_TRANSLATION_LOADER_PROVIDER={
  provide:TranslateLoader,
  useClass:TranslateComponent,
  deps:[HttpClient]
}
