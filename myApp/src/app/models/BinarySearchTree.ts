import {Tree} from './Tree';
import { animation } from '@angular/core/src/animation/dsl';

export default class BinarySearchTree extends Tree {
  constructor(value: number) {
      super(value);
  }

  insert(value: number, animations= []) {
    animations.push({
      className: 'node',
      arg1: this
    });
    if (this.value > value) {
        if (this.left) {
          animations.push({
            className: 'edge',
            arg1: this,
            arg2: this.left,
          });
          this.left.insert(value, animations);
        } else {
          this.left = new BinarySearchTree(value);
          animations.push({
            className: 'node',
            arg1: this.left
          });
        }
    }
    if (this.value < value) {
        if (this.right) {
          animations.push({
            className: 'edge',
            arg1: this,
            arg2: this.right,
          });
          this.right.insert(value, animations);
        } else {
          this.right = new BinarySearchTree(value);
          animations.push({
            className: 'node',
            arg1: this.right
          });
        }
    }
    return {
      animations: animations
    };
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

  // getAnimations() {
  //   // clone the animations array and return it after resetting
  //   const animations = this.animations.slice(0);
  //   this.animations = [];
  //   return animations;
  // }
}
