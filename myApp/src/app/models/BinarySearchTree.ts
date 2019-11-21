import BinarySearchTreeNode from './BinarySearchTreeNode';

let animations = [];

export const insert = (node: BinarySearchTreeNode, value: number) => {
  animations.push({
    className: 'node',
    arg1: node
  });
  if (!node) {
    return new BinarySearchTreeNode(value);
  }
  if (node.value > value) {
    animations.push({
      className: 'edge',
      arg1: node,
      arg2: node.left,
    });
    node.left = insert(node.left, value);

  }
  if (node.value < value) {
    animations.push({
      className: 'edge',
      arg1: node,
      arg2: node.right,
    });
    node.right = insert(node.right, value);
  }
  return node;
};

export const clearAnimations = () => {
  animations = [];
};

export const getAnimations = () => {
  const ret = animations.slice(0);
  clearAnimations();
  return ret;
};

const minValue = (node) => {
  if (node.left) {
    return minValue(node.left);
  } else {
    return node.value;
  }
};

export const deleteNode = (node, value: number) => {
  console.log(node);
  console.log(node.value === value);
  if (!node) {
    return null;
  }
  if (node.value === value) {
    if (!node.left && !node.right) {
      return null;
    } else if (!node.right) {
      node = node.left;
    } else if (!node.left) {
      node = node.right;
    } else {
      const min = minValue(node.right);
      node.right = deleteNode(node.right, min);
      node.value = min;
    }
  }
  if (node.value > value && node.left) {
    node.left = deleteNode(node.left, value);
  }
  if (node.value < value && node.right) {
    node.right = deleteNode(node.right, value);
  }
  return node;
};




