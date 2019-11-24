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
        const edges = [];

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
          left: left ,
          edges: edges,
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
  return treeNodes;
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
  console.log(heap);
  const treeNodes = [];
  heap.forEach((node, i) => {
    const edges = [];
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
        edges: edges,
      });
  });
  return treeNodes;
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

export const generateKNodesTree = (insertMethod, k) => {
  let rand;
  let tree = null;
  for (let i = 0; i < k; i++) {
    rand = Math.floor((Math.random() * 100) + 1);
    tree = insertMethod(tree, rand);
  }
  return tree;
}
