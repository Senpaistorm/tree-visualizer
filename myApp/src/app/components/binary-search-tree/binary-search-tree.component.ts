import { Component, OnInit } from '@angular/core';
import {insert, deleteNode, getAnimations, clearAnimations} from '../../models/BinarySearchTree';
import {parse, generateKNodesTree, diffNodes, diffEdges} from '../../util';
import { preorderAnimation, inorderAnimation, postorderAnimation,
  applyAnimationList,
  updateNodes,
  updateEdges
 } from '../../animations';
import BinarySearchTreeNode from '../../models/BinarySearchTreeNode';

@Component({
  selector: 'app-binary-search-tree',
  templateUrl: './binary-search-tree.component.html',
  styleUrls: []
})
export class BinarySearchTreeComponent implements OnInit {
  tree: BinarySearchTreeNode = null;
  treeNodes: any = [];
  treeEdges: any = [];
  defSpeed = 500;

  alertMsg = '';
  alertShow = false;
  constructor() { }

  ngOnInit() {
  }

  onResize() {
  }

  addNode($event) {
    const value = $event;
    if (value === null) {
      this.alertShow = true;
      this.alertMsg = 'Invalid input - node value cannot be empty.';
      return;
    }
    this.tree = insert(this.tree, value);
    this.setTree();
  }

  deleteNode($event) {
    const value = $event;
    if (value === null) {
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
    this.tree = generateKNodesTree(insert, 10);
    this.setTree();
  }

  setTree() {
    Promise.resolve(parse(this.tree))
      .then((res: any) => {
        const diff = {
          diffNodes: diffNodes(this.treeNodes, res.treeNodes),
          diffEdges: diffEdges(this.treeEdges, res.treeEdges)
        };
        return diff;
      })
      .then((diff) => {
        updateNodes(diff.diffNodes, this.treeNodes);
        updateEdges(diff.diffEdges, this.treeEdges);
        return;
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
