import HeapNode from './HeapNode';

export const parent = (i) => {
  return Math.floor((i - 1) / 2);
};

export const left = (i) => {
  return (2 * i + 1);
};

export const right = (i) => {
  return (2 * i + 2);
};

const swap = (A, x, y) => {
  const tmp = A[x];
  A[x] = A[y];
  A[y] = tmp;
};

export const insert = (heap: HeapNode, value: number) => {
  if (!heap) {
    return new HeapNode(value);
  }
  heap.size++;
  let i = heap.size - 1;
  heap.nodes.push(value);
  while (i !== 0 && heap.nodes[parent(i)] < heap.nodes[i]) {
    swap(heap.nodes, parent(i), i);
    i = parent(i);
  }
  return heap;
};

export const deleteNode = (heap: HeapNode, value: number) => {
  throw new Error('Method not implemented.');
};

export const getMax = (heap: HeapNode) => {
  return heap.nodes[0];
};

