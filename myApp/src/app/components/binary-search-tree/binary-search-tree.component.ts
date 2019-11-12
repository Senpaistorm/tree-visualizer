import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import BinarySearchTree from '../../models/BinarySearchTree';

@Component({
  selector: 'app-binary-search-tree',
  templateUrl: './binary-search-tree.component.html',
  styleUrls: ['./binary-search-tree.component.css']
})
export class BinarySearchTreeComponent implements OnInit {
  tree: BinarySearchTree = null;
  rootValue = new FormControl('');
  constructor() { }

  ngOnInit() {
  }

  addNode(e) {
    console.log(e);
    e.preventDefault();
    if (this.tree == null) {
      this.tree = new BinarySearchTree(this.rootValue.value);
    } else {
      this.tree.insert(this.rootValue.value);
    }
    console.log(this.tree);
  }

}
