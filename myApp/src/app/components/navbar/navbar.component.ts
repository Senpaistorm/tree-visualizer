import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() treeOptions=[];
  @Output() selectActiveOption: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log(this.treeOptions);
  }

  changeSelection(i){
    this.selectActiveOption.emit(i);
  }
}
