import { Component, OnInit } from '@angular/core';
import { insert, deleteNode } from '../../models/AVLTree';
import { applyAnimationList, preorderAnimation, inorderAnimation, postorderAnimation } from '../../animations';
import { parse } from '../../util';
import AVLTreeNode from '../../models/AVLTreeNode';

@Component({
  selector: 'app-avl-tree',
  templateUrl: './avl-tree.component.html',
  styleUrls: ['./avl-tree.component.css']
})
export class AvlTreeComponent implements OnInit {
  tree: AVLTreeNode = null;
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

  addNode($event) {
    const value = $event;
    if (!value) {
      this.alertShow = true;
      this.alertMsg = 'Invalid input - node value cannot be empty.';
      return;
    }
    this.tree = insert(this.tree, value);
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
