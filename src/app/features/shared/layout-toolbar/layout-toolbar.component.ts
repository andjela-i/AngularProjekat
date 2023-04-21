import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AppState } from 'src/app/app.state';
import { User } from 'src/app/models/user';
import { selectProfile } from 'src/store/movies.selector';

@Component({
  standalone: true,
  selector: 'app-layout-toolbar',
  templateUrl: './layout-toolbar.component.html',
  styleUrls: ['./layout-toolbar.component.scss'],
  imports: [
    CommonModule,
    TranslateModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule,
  ],
})
export class AppLayoutToolbarComponent implements OnInit {
  user!: User;
  language: string = 'sr';

  constructor(
    private store: Store<AppState>,
    private _translate: TranslateService
  ) {
    this.store.select(selectProfile).subscribe((korisnik) => {
      this.user = korisnik;
    });
    this.language = _translate.currentLang;
    _translate.onLangChange.subscribe((lang) => {
      this.language = lang.lang;
    });
  }

  ngOnInit(): void {}

  isAdmin(): any {
    if (this.user.role === 'admin') {
      return true;
    } else {
      return false;
    }
  }

  handleLanguageChange(lang: string) {
    this._translate.use(lang);
    localStorage.setItem('app.lang', lang);
  }
}
