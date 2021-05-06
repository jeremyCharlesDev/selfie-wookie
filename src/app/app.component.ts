import { LoggerService } from './shared/services/logger/logger.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Selfie Wookies';
  logoAffiche = true;
  valeurRechercher = '';

  rechercherSelfies(valeur: string) {
    this.valeurRechercher = valeur;
    this.loggerService.log(valeur);
  }

  constructor(private loggerService: LoggerService) {
  }
}
