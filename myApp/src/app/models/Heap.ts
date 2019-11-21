import {Tree} from './Tree';

export default class Heap extends Tree {
  constructor(value: number) {
      super(value);
  }

  delete(value: number) {
    throw new Error("Method not implemented.");
  }

  insert(value: number, animations= []) {
  }
}
