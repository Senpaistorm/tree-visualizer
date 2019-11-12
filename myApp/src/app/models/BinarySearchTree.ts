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
            }
        }
        if (this.value < value) {
            if (this.right) {
                this.right.insert(value);
            } else {
                this.right = new BinarySearchTree(value);
            }
        }
    }

    delete(value: number) {
        throw new Error("Method not implemented.");
    }
}
