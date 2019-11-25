import { Component, OnInit } from '@angular/core';
import { treeOptionsData } from '../treeOptions';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  treeOptions = treeOptionsData;

  activeOption = null;
  ngOnInit() {
  }

  selectActiveOption($event) {
    if ($event === -1) {
      this.activeOption = null;
    } else {
      this.activeOption = this.treeOptions[$event];
    }
    this.changeSelection($event);
  }

  changeSelection(i) {
    // unhighlight all options
    for (let j = 0; j < this.treeOptions.length; j++) {
      document.getElementById(`navoption-${j}`).style.background = '#f8f9fa';
    }
    // highlight selection
    const cur = document.getElementById(`navoption-${i}`);
    if (cur) {
      cur.style.background = 'rgb(220,220,220)';
    }
  }
}
