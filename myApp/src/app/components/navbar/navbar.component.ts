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
    for(let i = 0; i < this.treeOptions.length;i++){
      document.getElementById(`navoption-${i}`).style.background = 'white';
    }
    const cur = document.getElementById(`navoption-${i}`);
    cur.style.background = 'rgb(230,230,230)';
    this.selectActiveOption.emit(i);
  }
}
