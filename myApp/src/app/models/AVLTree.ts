import {Tree} from './Tree';

export default class AVLTree extends Tree {
  constructor(value: number) {
      super(value);
  }

  delete(value: number, animations= []) {
    throw new Error("Method not implemented.");
  }

  insert(value: number, animations= []) {
  }
}
