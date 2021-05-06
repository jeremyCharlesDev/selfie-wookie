import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu-general',
  templateUrl: './menu-general.component.html',
  styleUrls: ['./menu-general.component.css']
})
export class MenuGeneralComponent implements OnInit {

  @ViewChild('zoneRecherche', {static: false})
    maZoneRecherche: ElementRef;

  @Output()
  lancerRecherche: EventEmitter<string> = new EventEmitter<string>();

  rechercher() {
    const valeurRecherche = this.maZoneRecherche.nativeElement.value;
    this.lancerRecherche.emit(valeurRecherche);
  }

  constructor() { }

  ngOnInit(): void {
  }


}
