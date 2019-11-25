import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {

  @Input() activeOption;
  @Input() treeOptions;
  @Output() selectActiveOption: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
  }

  changeActiveOption($event) {
    this.selectActiveOption.emit($event);
  }

}
