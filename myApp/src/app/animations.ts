import {
  animation, trigger, animateChild, group,
  transition, animate, style, query
} from '@angular/animations';

import {
  preorder, inorder, postorder
} from '../app/util';

export const transAnimation = animation([
  style({
    height: '{{ height }}',
    opacity: '{{ opacity }}',
    backgroundColor: '{{ backgroundColor }}'
  }),
  animate('{{ time }}')
]);

export const highlightNode = (value = null) => {
  const nodeEle = document.getElementById(`node-${value}`);
  if (nodeEle) {
    nodeEle.classList.add('hl-node');
  }
};

const unhighlightNode = (value = null) => {
  const nodeEle = document.getElementById(`node-${value}`);
  if (nodeEle) {
    nodeEle.classList.remove('hl-node');
  }
};

export const highlightEdge = (from: any = null, to: any = null) => {
  const nodeEle = document.getElementById(`edge-${from}-${to}`);
  if (nodeEle) {
    nodeEle.classList.add('hl-edge');
  }
};

const unhighlightEdge = (from: any = null, to: any = null) => {
  const nodeEle = document.getElementById(`edge-${from}-${to}`);
  if (nodeEle) {
    nodeEle.classList.remove('hl-edge');
  }
};

const highlightNodeList = async (nodeList, speed= 1000) => {
  const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
  const getValue = i => {
    return sleep(speed).then(v => nodeList[i]);
  };

  let prev = null;
  for (let index = 0; index < nodeList.length; index++) {
    const val = await getValue(index);
    unhighlightNode(prev);
    highlightNode(val);
    prev = val;
  }
  await getValue(0);
  unhighlightNode(prev);
};

export const preorderAnimation = async (tree, speed= 1000) => {
  const pre = preorder(tree);
  highlightNodeList(pre);
};

export const inorderAnimation = async (tree, speed= 1000) => {
  const inOrder = inorder(tree);
  highlightNodeList(inOrder);
};

export const postorderAnimation = async (tree, speed= 1000) => {
  const post = postorder(tree);
  highlightNodeList(post);
};
