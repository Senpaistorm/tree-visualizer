import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  treeOptions = [
    'Binary Search Tree',
    'AVL Tree',
    'Heap'
  ]

  activeOption = null;
  ngOnInit() {
  }

  selectActiveOption($event){
    console.log($event);
    this.activeOption = this.treeOptions[$event];
  }

}
