import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import BinarySearchTree from '../../models/BinarySearchTree';
import {parse} from '../../util';
import { setDefaultService } from 'selenium-webdriver/chrome';
import { highlightNode, highlightEdge,
  preorderAnimation, inorderAnimation, postorderAnimation,
  applyAnimationList
 } from '../../animations';

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

  height = null;
  width = null;
  ngOnInit() {
    this.height = document.documentElement.clientHeight;
    this.width = document.getElementById('tree-editor').offsetWidth;
  }

  onResize() {
    this.height = Math.max(this.height, document.documentElement.clientHeight);
    this.width = Math.max(this.width, document.getElementById('tree-editor').offsetWidth);
  }

  addNode() {
    let animationList;
    if (!this.rootValue.value) {
      this.alertShow = true;
      this.alertMsg = 'Invalid input - node value cannot be empty.';
      return;
    }
    if (this.tree == null) {
      this.tree = new BinarySearchTree(this.rootValue.value);
    } else {
      animationList = this.tree.insert(this.rootValue.value).animations;
    }
    console.log(animationList);
    applyAnimationList(animationList);
    // animation
    this.setTree();
  }

  deleteNode() {
    if (!this.deleteValue.value) {
      this.alertShow = true;
      this.alertMsg = 'Invalid input - node value cannot be empty.';
      return;
    }
    if (this.tree == null) {
      this.alertShow = true;
      this.alertMsg = 'Invalid operation - tree is empty.';
      return;
    } else {
      this.tree = this.tree.delete(this.deleteValue.value);
    }
    this.setTree();
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

  setEdges() {
    this.treeEdges = [];
    this.treeNodes.forEach((node) => {
      this.treeEdges = this.treeEdges.concat(node.edges);
    });
  }

  onAlertDismiss() {
    this.alertShow = false;
  }

  highlightNode(value: any = null) {
    highlightNode(value);
  }

  highlightEdge(from: any = null, to: any = null) {
    highlightEdge(from, to);
  }

  preorder() {
    preorderAnimation(this.tree);
  }

  inorder() {
    inorderAnimation(this.tree);
  }

  postorder() {
    postorderAnimation(this.tree);
  }
}
