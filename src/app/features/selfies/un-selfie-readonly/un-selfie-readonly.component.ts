import { Selfie } from './../../../models/selfie';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-un-selfie-readonly',
  templateUrl: './un-selfie-readonly.component.html',
  styleUrls: ['./un-selfie-readonly.component.css']
})
export class UnSelfieReadonlyComponent implements OnInit {

  @Input()
  public unSelfie: Selfie = null;


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  clickPourDuel() {
    this.router.navigate(['duels/nouveau']);
  }

  clickPourConsultation() {
    // Todo renseingner l'id dans notre api
    this.unSelfie.id = 2;
    this.router.navigate(['/selfies/consulter', this.unSelfie.id]);
  }
}
