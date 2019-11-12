export abstract class Tree {
    value: number;
    left: Tree;
    right: Tree;

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    abstract insert(value: number);
    abstract delete(value: number);

}
