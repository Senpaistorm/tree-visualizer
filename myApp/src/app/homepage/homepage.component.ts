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
  }

}
