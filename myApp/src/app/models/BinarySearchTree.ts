import {Tree} from './Tree';

export default class BinarySearchTree extends Tree {
    constructor(value: number) {
        super(value);
    }

    insert(value: number) {
      if (this.value > value) {
          if (this.left) {
              this.left.insert(value);
          } else {
              this.left = new BinarySearchTree(value);
              return true;
          }
      }
      if (this.value < value) {
          if (this.right) {
              this.right.insert(value);
          } else {
              this.right = new BinarySearchTree(value);
              return true;
          }
      }
    }

    delete(value: number) {
      return false;
    }
}
