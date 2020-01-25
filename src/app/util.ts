import {left, right} from './models/MaxHeap';
import HeapNode from './models/HeapNode';

const getWidth = () => {
  const rect = document.getElementById('tree-editor').getBoundingClientRect();
  return rect.width;
};

// return a list of nodes that contains the top and left offsets
export const parse = (tree: any) => {
  if (!tree) { return []; }
  let depth = 0;
  let bfs = [tree];
  let newQueue;
  const treeNodes = [];
  const edges = [];
  let cur;
  while (bfs.length > 0) {
    newQueue = [...bfs];
    // compute queue size and screen width
    const size = Math.pow(2, depth);
    const width = getWidth();
    bfs = [];
    let leftOffset = 0;
    while (newQueue.length > 0) {
      cur = newQueue.splice(0, 1)[0];
      if (cur) {
        const top = depth * 80;
        const left = leftOffset * width / size + width / size / 2;

        bfs.push(cur.left);
        if (cur.left) {
          edges.push({
            from: cur,
            x1: left,
            y1: top,
            to: cur.left,
            x2: left - width / (size * 4),
            y2: (depth + 1) * 80,
          });
        }
        bfs.push(cur.right);
        if (cur.right) {
          edges.push({
            from: cur,
            x1: left,
            y1: top,
            to: cur.right,
            x2: left + width / (size * 4),
            y2: (depth + 1) * 80,
          });
        }
        treeNodes.push({
          value: cur.value,
          top: top,
          left: left
        });
      } else {
        bfs.push(null);
        bfs.push(null);
      }
      leftOffset += 1;
    }
    depth = depth + 1;
    if (bfs.filter(n => n).length === 0) {
      break;
    }
  }
  return {treeNodes: treeNodes, treeEdges: edges};
};

export const preorder = (tree, res= []) => {
  if (tree) {
    res.push(tree.value);
    preorder(tree.left, res);
    preorder(tree.right, res);
  }
  return res;
};

export const inorder = (tree, res= []) => {
  if (tree) {
    inorder(tree.left, res);
    res.push(tree.value);
    inorder(tree.right, res);
  }
  return res;
};

export const postorder = (tree, res= []) => {
  if (tree) {
    postorder(tree.left, res);
    postorder(tree.right, res);
    res.push(tree.value);
  }
  return res;
};

export const getHeight = (node) => {
  if (!node) {
    return 0;
  }
  return node.height;
};

export const parseHeap = (heap) => {
  const treeNodes = [];
  const edges = [];
  heap.forEach((node, i) => {
    const depth = Math.floor(Math.log2(i + 1));
    const leftOffset = depth < 2 ? i - depth : i + 1 - Math.pow(2, depth);
    const size = Math.pow(2, depth);
    const width = getWidth();
    const top = depth * 80;
    const leftPos = leftOffset * width / size + width / size / 2;

    // has left edge
    if (left(i) < heap.length) {
      edges.push({
        from: ({value: node}),
        x1: leftPos,
        y1: top,
        to: {value: heap[left(i)]},
        x2: leftPos - width / (size * 4),
        y2: (depth + 1) * 80,
      });
    }

    // has right edge
    if (right(i) < heap.length) {
      edges.push({
        from: ({value: node}),
        x1: leftPos,
        y1: top,
        to: {value: heap[right(i)]},
        x2: leftPos + width / (size * 4),
        y2: (depth + 1) * 80,
      });
    }

    treeNodes.push({
      value: node,
        top: top,
        left: leftPos ,
      });
  });
  return {
    treeNodes: treeNodes,
    treeEdges: edges
  };
};

export const heapToTree = (heap, i) => {
  if (!heap) {
    return null;
  }
  const root = new HeapNode(heap[i]);
  const l = left(i);
  if (l < heap.length) {
    root.left = heapToTree(heap, l);
  }
  const r = right(i);
  if (r < heap.length) {
    root.right = heapToTree(heap, r);
  }
  return root;
};

export const swap = (A, x, y) => {
  const tmp = A[x];
  A[x] = A[y];
  A[y] = tmp;
};

// this takes in an insert function and an integer k,
// and generates a k noded tree using the insertion method
export const generateKNodesTree = (insertMethod, k) => {
  let rand;
  let tree = null;
  for (let i = 0; i < k; i++) {
    rand = Math.floor((Math.random() * 100) + 1);
    tree = insertMethod(tree, rand);
  }
  return tree;
};

const sameNode = (a, b) => {
  return a.value === b.value && samePositionNode(a, b);
}

const samePositionNode = (a, b) => {
  return a.top === b.top && a.left === b.left;
};

export const sameEdge = (a, b) => {
  return a.from.value === b.from.value && a.to.value === b.to.value;
};

const samePositionEdge = (a, b) => {
  return a.x1 === b.x1 && a.y1 === b.y1 &&
          a.x2 === b.x2 && a.y2 === b.y2;
};

// this computes the difference between two lists of nodes a,b and
// returns it as an object for animation
export const diffNodes = (a: any , b: any) => {
  const res = {
    new : [],
    modified: [],
    deleted: [],
  };

  res.new = b.filter(n => a.findIndex(v => v.value === n.value) === -1);
  res.deleted = a.filter(n => b.findIndex(v => v.value === n.value) === -1);
  res.modified = b.filter(n => a.findIndex(v =>
    v.value === n.value && !samePositionNode(n, v)) !== -1);
  return res;
};

export const diffEdges = (a: any, b: any) => {
  const res = {
    new : [],
    modified: [],
    deleted: [],
  };

  res.new = b.filter(n => a.findIndex(v => sameEdge(n, v)) === -1);
  res.deleted = a.filter(n => b.findIndex(v => sameEdge(n, v)) === -1);
  res.modified = b.filter(n => a.findIndex(v =>
    sameEdge(n, v) && !samePositionEdge(n, v)) !== -1);
  return res;
};

export const diffNodesHeap = (a, b) => {
  const res = {
    new : [],
    modified: [],
    deleted: [],
  };

  // deleted a node from heap
  if (a.length > b.length ) {
    res.deleted = a.filter(n =>
      a.filter(k => k.value === n.value).length >
      b.filter(v => v.value === n.value).length).slice(-(a.length - b.length));
    console.log(res.deleted);
  }
  // inserted a node
  if (a.length < b.length) {
    res.new = b.filter(n =>
      b.filter(k => k.value === n.value).length >
      a.filter(v => v.value === n.value).length).slice(-(b.length - a.length));
    console.log(res.new);
  }
  console.log(a);
  console.log(b);
  b.forEach((node, i) => {
    if (i >= a.length || !sameNode(node, a[i])) {
      if (res.new.filter(n => sameNode(n, node)).length === 0 &&
          res.deleted.filter(n => sameNode(n, node)).length === 0) {
        res.modified.push(node);
      }
    }
  })
  console.log(res);
  return res;
};
