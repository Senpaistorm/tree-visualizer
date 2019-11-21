import {getHeight } from '../util';
import AVLTreeNode from './AVLTreeNode';

export default class AVLTree {
  height;

  delete(value: number, animations= []) {
    throw new Error("Method not implemented.");
  }

  insert(value: number, animations= []) {

  }

  rightRotate(node: AVLTreeNode): AVLTreeNode {
    const newRoot = node.left;
    const newLeftChild = newRoot.right;

    newRoot.right = node;
    node.left = newLeftChild;

    node.height = Math.max(getHeight(node.left), getHeight(node.right)) + 1;
    newRoot.height = Math.max(getHeight(newRoot.left), getHeight(newRoot.right)) + 1;

    return newRoot;
  }

  leftRotate(node: AVLTreeNode): AVLTreeNode {
    const newRoot = node.right;
    const newRightChild = newRoot.left;

    newRoot.left = node;
    node.right = newRightChild;

    node.height = Math.max(getHeight(node.left), getHeight(node.right)) + 1;
    newRoot.height = Math.max(getHeight(newRoot.left), getHeight(newRoot.right)) + 1;

    return newRoot;
  }
}
