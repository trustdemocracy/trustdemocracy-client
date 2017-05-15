import { Component, OnInit } from '@angular/core';
import { Translation, LocaleService, TranslationService } from 'angular-l10n';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends Translation implements OnInit {
  selectedLanguage:string;
  availableLanguages: string[] = ['English', 'Español'];
  availableLocales = {
    'English': 'en',
    'Español': 'es'
  };
  currentUser: string = localStorage.getItem('currentUser');

  constructor(public locale: LocaleService,
    public translation: TranslationService,
    private router: Router) {
    super(translation);

    this.locale.addConfiguration()
      .addLanguages(['es', 'en'])
      .setCookieExpiration(30)
      .defineDefaultLocale('es', 'ES')
      .useLocalStorage();
    this.locale.init();

    this.translation.addConfiguration()
      .addProvider('./assets/locales/');
    this.translation.init();
  }

  ngOnInit(): void {
    this.resetScroll();
  }

  selectLanguage(): void {
    this.locale.setCurrentLanguage(this.availableLocales[this.selectedLanguage]);
  }

  resetScroll(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }

}
