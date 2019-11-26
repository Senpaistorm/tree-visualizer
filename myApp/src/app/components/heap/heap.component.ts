import { Component, OnInit } from '@angular/core';
import { insert, deleteNode } from '../../models/MaxHeap';
import { parseHeap, heapToTree, generateKNodesTree, diffNodes, diffEdges, diffNodesHeap } from '../../util';
import { preorderAnimation, inorderAnimation, postorderAnimation, updateNodes, updateEdges } from '../../animations';

@Component({
  selector: 'app-heap',
  templateUrl: './heap.component.html',
  styleUrls: []
})
export class HeapComponent implements OnInit {
  tree = null;
  treeNodes: any = [];
  treeEdges: any = [];
  defSpeed = 500;

  alertMsg = '';
  alertShow = false;
  constructor() { }

  ngOnInit() {
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
    this.tree = generateKNodesTree(insert, 10);
    this.setTree();
  }

  setTree() {
    Promise.resolve(parseHeap(this.tree))
      .then((res: any) => {
        this.treeNodes = res.treeNodes;
        this.treeEdges = res.treeEdges;
      });
  }

  onAlertDismiss() {
    this.alertShow = false;
  }

  preorder() {
    preorderAnimation(heapToTree(this.tree, 0), this.defSpeed);
  }

  inorder() {
    inorderAnimation(heapToTree(this.tree, 0), this.defSpeed);
  }

  postorder() {
    postorderAnimation(heapToTree(this.tree, 0), this.defSpeed);
  }

}
