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
};

const minValueNode = (node) => {
      let current = node;
      /* loop down to find the leftmost leaf */
      while (current.left) {
        current = current.left;
      }
      return current;
};

export const deleteNode = (node: AVLTreeNode, value: number) => {
  if (!node) {
    return node;
  }

  if (value < node.value) {
    // node is on the left subtree
    node.left = deleteNode(node.left, value);
  } else if (value > node.value) {
    // node is on the right subtree
    node.right = deleteNode(node.right, value);
  } else {
    // this is the node to be deleted
    // node with only one child or no child
    if ((!node.left) || (!node.right)){
      let tmp = null;
      if (tmp === node.left) {
        tmp = node.right;
      } else {
        tmp = node.left;
      }
      // no child case
      if (!tmp) {
        tmp = node;
        node = null;
      } else {
        node = tmp;
      }
    } else {
      // find the inorder successor
      const tmp = minValueNode(node.right);
      node.value = tmp.value;
      // delete the inorder successor
      node.right = deleteNode(node.right, tmp.value);
    }
  }

  if (!node) {
    return node;
  }

  node.height = Math.max(getHeight(node.left), getHeight(node.right)) + 1;

  const balance = getBalance(node);

  // If this node becomes unbalanced, then there are 4 cases
  // Left Left Case
  if (balance > 1 && getBalance(node.left) >= 0) {
      return rightRotate(node);
  }

  // Left Right Case
  if (balance > 1 && getBalance(node.left) < 0) {
      node.left = leftRotate(node.left);
      return rightRotate(node);
  }

  // Right Right Case
  if (balance < -1 && getBalance(node.right) <= 0)  {
    return leftRotate(node);
  }

  // Right Left Case
  if (balance < -1 && getBalance(node.right) > 0) {
      node.right = rightRotate(node.right);
      return leftRotate(node);
  }
  return node;
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

  // right tree is too long with left subtree longer, RL rotate
  if (balance < -1 && value > node.right.value) {
    node.right = rightRotate(node.right);
    return leftRotate(node);
  }

  return node;
};
