import {Tree} from './Tree';

export default class AVLTreeNode extends Tree {
  height;
  constructor(value: number) {
      super(value);
      this.height = 1;
  }
}
