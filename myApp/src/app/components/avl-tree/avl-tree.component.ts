import { Component, OnInit } from '@angular/core';
import AVLTree from '../../models/AVLTree';

@Component({
  selector: 'app-avl-tree',
  templateUrl: './avl-tree.component.html',
  styleUrls: ['./avl-tree.component.css']
})
export class AvlTreeComponent implements OnInit {
  tree: AVLTree = null;
  treeNodes: any = [];
  treeEdges: any = [];
  constructor() { }

  ngOnInit() {
  }

}
