import {Tree} from './Tree';

export default class BinarySearchTree extends Tree {
  animations: any = [];
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
    let root = this;
    if (this.value === value) {
      if (!this.left && !this.right) {
        root = null;
      } else if (!this.right) {
        root = this.left;
      } else if (!this.left) {
        root = this.right;
      } else {
        const min = root.right.minValue();
        root.right = root.right.delete(min);
        root.value = min;
      }
    }
    if (this.value > value && this.left) {
      this.left = this.left.delete(value);
    }
    if (this.value < value && this.right) {
      this.right = this.right.delete(value);
    }
    return root;
  }

  minValue() {
    if (this.left) {
      return this.left.minValue();
    } else {
      return this.value;
    }
  }
}
