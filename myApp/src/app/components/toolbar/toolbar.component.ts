import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() inorder: EventEmitter<any> = new EventEmitter();
  @Output() preorder: EventEmitter<any> = new EventEmitter();
  @Output() postorder: EventEmitter<any> = new EventEmitter();
  @Output() generateRandomTree: EventEmitter<any> = new EventEmitter();
  @Output() addNode: EventEmitter<any> = new EventEmitter();
  @Output() deleteNode: EventEmitter<any> = new EventEmitter();

  rootValue = new FormControl();
  deleteValue = new FormControl();
  constructor() { }

  ngOnInit() {
  }


  addNodeEvent() {
    this.addNode.emit(this.rootValue.value);
  }

  deleteNodeEvent() {
    console.log(this.deleteValue);
    this.deleteNode.emit(this.deleteValue.value);
  }

  generateRandomTreeEvent() {
    this.generateRandomTree.emit(null);
  }

  inorderEvent() {
    this.inorder.emit(null);
  }
  preorderEvent() {
    this.preorder.emit(null);
  }
  postorderEvent() {
    this.postorder.emit(null);
  }
}
