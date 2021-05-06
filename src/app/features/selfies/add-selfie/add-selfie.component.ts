import { SelfieListService } from './../../../shared/services/selfie-list/selfie-list.service';
import { Selfie } from './../../../models/selfie';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-add-selfie',
  templateUrl: './add-selfie.component.html',
  styleUrls: ['./add-selfie.component.css']
})
export class AddSelfieComponent implements OnInit {


  @Input()
  selfieARenseigner: Selfie = null;

  @Output()
  public annulerAjouter: EventEmitter<any> = new EventEmitter<any>();

  public deviceId: string;
  public videoOptions: MediaTrackConstraints = {
    // width: {ideal: 1024},
    // height: {ideal: 576}
  };
  public errors: WebcamInitError[] = [];

  // latest snapshot
  public webcamImage: WebcamImage = null;

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();


  constructor(private selfieService: SelfieListService) { }

  ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
      });
  }

  clickAnnulerSaisie() {
    this.annulerAjouter.emit({});
  }
  clickSurAjouter() {
    // tslint:disable-next-line: deprecation
    this.selfieService.ajouter(this.selfieARenseigner).subscribe(item => this.selfieARenseigner = item);

    // TODO Informer le parent
  }


  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  public handleImage(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }



}
