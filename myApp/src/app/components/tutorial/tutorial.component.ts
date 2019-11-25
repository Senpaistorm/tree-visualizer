import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {
  @Input() activeOption;
  @Input() treeOptions;
  @Output() selectActiveOption: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  changeActiveOption(i) {
    this.selectActiveOption.emit(i);
  }
}
