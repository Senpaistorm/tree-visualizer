import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import BinarySearchTree from '../../models/BinarySearchTree';
import {parse} from '../../util';

@Component({
  selector: 'app-binary-search-tree',
  templateUrl: './binary-search-tree.component.html',
  styleUrls: ['./binary-search-tree.component.css']
})
export class BinarySearchTreeComponent implements OnInit {
  tree: BinarySearchTree = null;
  treeNodes: any = [];
  rootValue = new FormControl('');
  rect = null;
  constructor() { }

  ngOnInit() {
    this.treeNodes = parse(this.tree);
  }

  addNode(e) {
    if (this.tree == null) {
      this.tree = new BinarySearchTree(this.rootValue.value);
    } else {
      this.tree.insert(this.rootValue.value);
    }
    console.log(this.tree);
    // animation
    //this.treeNodes = parse(this.tree);
  }

  generateRandomTree() {
    let rand = Math.floor((Math.random() * 100) + 1);
    this.tree = new BinarySearchTree(rand);
    for (let i = 0; i < 10; i++) {
      rand = Math.floor((Math.random() * 100) + 1);
      this.tree.insert(rand);
    }
    this.treeNodes = parse(this.tree);
  }

  render() {

  }

}
