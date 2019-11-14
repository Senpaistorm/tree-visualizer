import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import BinarySearchTree from '../../models/BinarySearchTree';
import {parse} from '../../util';
import { setDefaultService } from 'selenium-webdriver/chrome';

@Component({
  selector: 'app-binary-search-tree',
  templateUrl: './binary-search-tree.component.html',
  styleUrls: ['./binary-search-tree.component.css']
})
export class BinarySearchTreeComponent implements OnInit {
  tree: BinarySearchTree = null;
  treeNodes: any = [];
  treeEdges: any = [];
  rootValue = new FormControl();
  deleteValue = new FormControl();
  rect = null;
  nodeSize = 40;

  alertMsg = '';
  alertShow = false;
  constructor() { }

  ngOnInit() {

  }

  addNode() {
    if (!this.rootValue.value) {
      this.alertShow = true;
      this.alertMsg = 'Invalid input - node value cannot be empty.';
      return;
    }
    console.log(this.rootValue);
    if (this.tree == null) {
      this.tree = new BinarySearchTree(this.rootValue.value);
    } else {
      this.tree.insert(this.rootValue.value);
    }
    console.log(this.tree);
    // animation
    this.treeNodes = parse(this.tree);
  }

  deleteNode() {
    if (!this.deleteValue.value) {
      this.alertShow = true;
      this.alertMsg = 'Invalid input - node value cannot be empty.';
      return;
    }
  }

  generateRandomTree() {
    let rand = Math.floor((Math.random() * 100) + 1);
    this.tree = new BinarySearchTree(rand);
    for (let i = 0; i < 10; i++) {
      rand = Math.floor((Math.random() * 100) + 1);
      this.tree.insert(rand);
    }
    this.setTree();
  }

  setTree() {
    Promise.resolve(parse(this.tree))
      .then((res) => {
        this.treeNodes = res;
      })
      .then(() => {
        this.setEdges();
      });
  }

  setEdges(){
    console.log(this.treeEdges);
    this.treeEdges = [];
    this.treeNodes.forEach((node) => {
      console.log(node.edges);
      this.treeEdges = this.treeEdges.concat(node.edges);
    });
  }

  onAlertDismiss() {
    this.alertShow = false;
  }
}
