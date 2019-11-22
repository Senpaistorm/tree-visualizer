import { Component, OnInit } from '@angular/core';
import {insert, deleteNode, getAnimations, clearAnimations} from '../../models/BinarySearchTree';
import {parse} from '../../util';
import { preorderAnimation, inorderAnimation, postorderAnimation,
  applyAnimationList
 } from '../../animations';
import BinarySearchTreeNode from '../../models/BinarySearchTreeNode';

@Component({
  selector: 'app-binary-search-tree',
  templateUrl: './binary-search-tree.component.html',
  styleUrls: ['./binary-search-tree.component.css']
})
export class BinarySearchTreeComponent implements OnInit {
  tree: BinarySearchTreeNode = null;
  treeNodes: any = [];
  treeEdges: any = [];
  rect = null;
  nodeSize = 40;
  defSpeed = 500;

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

  testa(){
    this.treeNodes[0].top = 100;
  }

  addNode($event) {
    const value = $event;
    let animationList;
    if (!value) {
      this.alertShow = true;
      this.alertMsg = 'Invalid input - node value cannot be empty.';
      return;
    }
    this.tree = insert(this.tree, value);
    // animationList = getAnimations();
    // console.log(animationList);
    // applyAnimationList(animationList);
    // animation
    this.setTree();
  }

  deleteNode($event) {
    const value = $event;
    if (!value) {
      this.alertShow = true;
      this.alertMsg = 'Invalid input - node value cannot be empty.';
      return;
    }
    if (this.tree == null) {
      this.alertShow = true;
      this.alertMsg = 'Invalid operation - tree is empty.';
      return;
    } else {
      this.tree = deleteNode(this.tree, value);
    }
    this.setTree();
  }

  generateRandomTree() {
    let rand;
    this.tree = null;
    for (let i = 0; i < 10; i++) {
      rand = Math.floor((Math.random() * 100) + 1);
      this.tree = insert(this.tree, rand);
    }
    clearAnimations();
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

  preorder() {
    preorderAnimation(this.tree, this.defSpeed);
  }

  inorder() {
    inorderAnimation(this.tree, this.defSpeed);
  }

  postorder() {
    postorderAnimation(this.tree, this.defSpeed);
  }
}
