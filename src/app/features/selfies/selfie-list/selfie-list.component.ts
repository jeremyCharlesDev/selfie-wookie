import { SelfieListService } from './../../../shared/services/selfie-list/selfie-list.service';
import { Selfie } from './../../../models/selfie';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-selfie-list',
  templateUrl: './selfie-list.component.html',
  styleUrls: ['./selfie-list.component.css']
})
export class SelfieListComponent implements OnInit, OnDestroy {

  lesSouscriptions: Subscription[] = [];
  public selfieAAjouter: Selfie = null;

  constructor(private selfieListService: SelfieListService) { }


  // lesSelfies: Selfie[] = [
  // tslint:disable-next-line: max-line-length
  //   {image: 'https://stankosstance.files.wordpress.com/2018/05/chewbacca.jpg', titre: 'Un selfie de ouf', wookie: {nom: 'Chewie', selfies: []}},
  // tslint:disable-next-line: max-line-length
  //   {image: 'https://www.funnylla.com/articles-images/207/one-fun-day-in-the-life-of-a-wookie_big.jpg', titre: 'Un super selfie', wookie: {nom: 'Chewie2', selfies: []}},
  // ];

    lesSelfies: Selfie[] = [];


    @Input()
    set filtre(valeur: string) {
      console.log(valeur);
    }


    ngOnDestroy(): void {
      this.lesSouscriptions.forEach(item => item.unsubscribe());
    }

  demandeAfficherPourAjoutSelfie(): void {
    this.selfieAAjouter = new Selfie();
    this.selfieAAjouter.titre = 'Test 01';
  }

  cacherZoneAjoutSelfie(): void {
    this.selfieAAjouter = null;
  }


  ngOnInit(): void {
    // this.lesSelfies = this.selfieListService.getAll();
    const subscriptionEnCours = this.selfieListService.getAll_asObservable().subscribe(unTableau => this.lesSelfies = unTableau);
    this.lesSouscriptions.push(subscriptionEnCours);
  }

}
