import {getHeight } from '../util';
import AVLTreeNode from './AVLTreeNode';

let animations = [];

const rightRotate = (node: AVLTreeNode): AVLTreeNode => {
  const newRoot = node.left;
  const newLeftChild = newRoot.right;

  newRoot.right = node;
  node.left = newLeftChild;

  node.height = Math.max(getHeight(node.left), getHeight(node.right)) + 1;
  newRoot.height = Math.max(getHeight(newRoot.left), getHeight(newRoot.right)) + 1;

  return newRoot;
};

const leftRotate = (node: AVLTreeNode): AVLTreeNode => {
  const newRoot = node.right;
  const newRightChild = newRoot.left;

  newRoot.left = node;
  node.right = newRightChild;

  node.height = Math.max(getHeight(node.left), getHeight(node.right)) + 1;
  newRoot.height = Math.max(getHeight(newRoot.left), getHeight(newRoot.right)) + 1;

  return newRoot;
};

const getBalance = (node: AVLTreeNode) => {
  if (!node) {
    return 0;
  }
  return getHeight(node.left) - getHeight(node.right);
}

export const deleteNode = (node: AVLTreeNode, value: number) =>{
  throw new Error("Method not implemented.");
};

export const insert = (node: AVLTreeNode, value: number) => {
  if (!node) {
    return new AVLTreeNode(value);
  }

  if (value < node.value) {
    node.left = insert(node.left, value);
  } else if (value > node.value) {
    node.right = insert(node.right, value);
  } else {
    return node;
  }

  node.height = 1 + Math.max(getHeight(node.left),
                            getHeight(node.right));

  const balance = getBalance(node);

  // left tree is too long, R rotate
  if (balance > 1 && value < node.left.value) {
    return rightRotate(node);
  }

  // right tree is too long, R rotate
  if (balance < -1 && value > node.right.value) {
    return leftRotate(node);
  }

  // left tree is too long with right subtree longer, LR rotate
  if (balance > 1 && value > node.left.value) {
    node.left = leftRotate(node.left);
    return rightRotate(node);
  }

  if (balance < -1 && value > node.right.value) {
    node.right = rightRotate(node.right);
    return leftRotate(node);
  }

  return node;
};
