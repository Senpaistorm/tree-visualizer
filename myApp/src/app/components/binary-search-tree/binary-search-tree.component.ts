import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import BinarySearchTree from '../../models/BinarySearchTree';
import {parse, getEdges} from '../../util';
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
  rect = null;
  constructor() { }

  ngOnInit() {

  }

  addNode() {
    if (!this.rootValue.value) {
      console.error("invalid input");
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
    console.log(this.tree);
    this.treeNodes = parse(this.tree);
    Promise.resolve(parse(this.tree))
      .then((res) => {
        this.treeNodes = res;
        return getEdges(this.tree);
      })
      .then((res) => {
        console.log(res);
        this.treeEdges = res;
        return res;
      })
      .then((res) => {
        console.log(this.treeEdges[0].from);
        console.log(document.getElementById(`node-${this.treeEdges[0].from.value}`));
        //this.setEdges();
      });
  }

  setEdges(){
    const from = this.treeEdges[0].from;
    console.log(from);
    const to = this.treeEdges[0].to;
    console.log(`node-${from.value}`);
    console.log(document.getElementById(`node-${from.value}`));
    const x1 = document.getElementById(`node-${from.value}`).offsetLeft;
    const y1 = document.getElementById(`node-${from.value}`).offsetHeight;
    console.log(document.getElementById(`node-${to.value}`));
  }
}
