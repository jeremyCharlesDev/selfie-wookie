import { SelfieListService } from './../../../shared/services/selfie-list/selfie-list.service';
import { Selfie } from './../../../models/selfie';
import { Subscription } from 'rxjs';
import { LoggerService } from './../../../shared/services/logger/logger.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-un-selfie',
  templateUrl: './un-selfie.component.html',
  styleUrls: ['./un-selfie.component.css']
})
export class UnSelfieComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];
  public leSelfie: Selfie = null;

  constructor(private loggeur: LoggerService, private route: ActivatedRoute, private SelfieListService: SelfieListService) { }

  ngOnDestroy(): void {
    this.subscriptions.forEach(item => item.unsubscribe());
  }

  ngOnInit(): void {
    // const subscription = this.route.params.subscribe(params => {
    //   const selfieId = params.id;
    //   this.SelfieListService.getOne(selfieId).subscribe(selfie => this.leSelfie = selfie);
    //   this.loggeur.log('UnSelfieComponent', selfieId);
    // });
    const subscription = this.route.params.pipe(
      switchMap(params => {
        const selfieId = params.id;
        return this.SelfieListService.getOne(selfieId);
      })
      ).subscribe(item => this.leSelfie = item);

    this.subscriptions.push(subscription);
  }

}
