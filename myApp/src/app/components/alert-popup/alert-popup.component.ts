import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-alert-popup',
  templateUrl: './alert-popup.component.html',
  styleUrls: ['./alert-popup.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateY(0)' })),
      transition('void => *', [
        style({ transform: 'translateY(-100%)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'translateY(100%)' }))
      ])
    ])]
})
export class AlertPopupComponent implements OnInit {

  @Input () isActive = false;
  @Input () alertMessage = '';
  @Output() alertDismiss: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onAlertDismiss () {
    this.alertDismiss.emit();
  }

}
