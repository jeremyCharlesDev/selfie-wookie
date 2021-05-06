import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Wookie } from './../../../models/wookie';
import { Selfie } from './../../../models/selfie';
import { Injectable } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Service gérant les selfies (CRUD)
 */
@Injectable({
  providedIn: 'root'
})
export class SelfieListService {

constructor(private httpClient: HttpClient) { }


/**
 * Retourne la liste complète des selfies (ici deux éléments en dur)
 */
// getAll(): Selfie[] {
//     const tableau: Selfie[] = [];

//     const selfie = new Selfie();
//     selfie.image = 'https://stankosstance.files.wordpress.com/2018/05/chewbacca.jpg';
//     selfie.titre = 'Yata super photo';
//     selfie.wookie = new Wookie();
//     selfie.wookie.nom = 'Chewie';
//     tableau.push(selfie);

//     tableau.push({
//       image: 'https://www.funnylla.com/articles-images/207/one-fun-day-in-the-life-of-a-wookie_big.jpg',
//       titre: 'Photo de ouf',
//       wookie: {
//         nom: 'Turloff',
//         selfies: []
//       }
//     });

//     return tableau;
// }

/**
 * Retourne une observable pour s'inscrire à la réception des tableaux de wookies
 */
getAll_asObservable(): Observable<Selfie[]> {
  // const monTableau = this.getAll();
  // return of(monTableau);

  // return interval(1000).pipe(
  //   map(entier => [
  //     {
  //       image: 'https://www.funnylla.com/articles-images/207/one-fun-day-in-the-life-of-a-wookie_big.jpg',
  //       titre: 'Photo de ouf ' + entier,
  //       wookie: {
  //         nom: 'Turloff',
  //         selfies: []
  //       }
  //     }
  //   ])
  // );
  return this.httpClient.get<Selfie[]>(environment.apis.selfies.url);
}

/**
 * Ajout d'un selfie, envoie des données en json vers l'api
 * et récupération du selfie à ajouté
 */
ajouter(selfie: Selfie): Observable<Selfie> {
  return this.httpClient.post<Selfie>(environment.apis.selfies.url, selfie);
}

/**
 * Retourne un seul selfie avec son wookie
 *
 * @param {number} id
 * @returns (Observable<Selfie>)
 */
getOne(id: number): Observable<Selfie> {
  return this.httpClient.get<Selfie>(environment.apis.selfies.url + '/' + id);
}

}

