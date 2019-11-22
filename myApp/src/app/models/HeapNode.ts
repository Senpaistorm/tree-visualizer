export default class HeapNode {
  nodes;
  size;

  constructor(value: number) {
      this.nodes = [value];
      this.size = 1;
  }
}
