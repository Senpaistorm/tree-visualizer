import {
  animation, trigger, animateChild, group,
  transition, animate, style, query
} from '@angular/animations';

import {
  preorder, inorder, postorder, sameEdge
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
  const nodeEle = document.getElementById(`edge-${from.value}-${to.value}`);
  if (nodeEle) {
    nodeEle.classList.add('hl-edge');
  }
};

const unhighlightEdge = (from: any = null, to: any = null) => {
  const nodeEle = document.getElementById(`edge-${from.value}-${to.value}`);
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


export const applyAnimation = (animateObj) => {
  const className = animateObj.className;
  switch (className) {
    case 'node':
      const value = animateObj.arg1.value;
      highlightNode(value);
      break;
    case 'edge':
      const from = animateObj.arg1;
      const to = animateObj.arg2;
      highlightEdge(from, to);
      break;
    default:
      console.error('animation not supported');
  }
};

export const applyAnimationList = async (animationList, speed= 500) => {
  const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
  const getValue = i => {
    return sleep(speed).then(v => animationList[i]);
  };

  for (let index = 0; index < animationList.length; index++) {
    const cur = await getValue(index);
    console.log(cur);
    applyAnimation(cur);

  }
};

export const updateNodes = (diff, treeNodes) => {
  diff.modified.forEach((node, i) => {
    const index = treeNodes.findIndex(n => n.value === node.value);
    treeNodes[index].top = node.top;
    treeNodes[index].left = node.left;
    treeNodes[index].edges = node.edges;
  });
  diff.new.forEach(node => {
    treeNodes.push(node);
  });
  diff.deleted.forEach((node) => {
    const index = treeNodes.findIndex(n => n.value === node.value);
    if (index !== -1) {
      treeNodes.splice(index, 1);
    }
  });
};

export const updateEdges = (diff, treeEdges) => {
  diff.modified.forEach((edge, i) => {
    const index = treeEdges.findIndex(n => sameEdge(n, edge));
    if (index !== -1) {
      treeEdges[index].x1 = edge.x1;
      treeEdges[index].y1 = edge.y1;
      treeEdges[index].x2 = edge.x2;
      treeEdges[index].y2 = edge.y2;
    }
  });
  diff.new.forEach(edge => {
    treeEdges.push(edge);
  });
  diff.deleted.forEach((edge) => {
    const index = treeEdges.findIndex(n => sameEdge(n, edge));
    if (index !== -1) {
      treeEdges.splice(index, 1);
    }
  });
};
