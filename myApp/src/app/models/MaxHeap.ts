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

export const insert = (heap, value: number) => {
  if (!heap) {
    return [value];
  }
  let i = heap.length - 1;
  heap.push(value);
  while (i !== 0 && heap[parent(i)] < heap[i]) {
    swap(heap, parent(i), i);
    i = parent(i);
  }
  return heap;
};

export const deleteNode = (heap: HeapNode, value: number) => {
  throw new Error('Method not implemented.');
};

export const getMax = (heap) => {
  return heap[0];
};

export const maxHeapify = (heap, i) => {
  const l = left(i);
  const r = right(i);
  let greatest = i;
  if (l < heap.length && heap[l] > heap[i]) {
    greatest = l;
  }
  if (r < heap.length && heap[r] > greatest) {
    greatest = r;
  }

  if (greatest !== i) {
    swap(heap, i, greatest);
    maxHeapify(heap, greatest);
  }
  return heap;
};

export const extractMax = (heap) => {
  if (!heap || heap.size === 1) {
    return null;
  }
  const root = heap[0];
  heap[0] = heap[heap.size - 1];
  heap.length--;
  heap = maxHeapify(heap, 0);
  return heap;
};
