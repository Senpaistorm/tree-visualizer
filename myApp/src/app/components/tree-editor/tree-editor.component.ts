import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tree-editor',
  templateUrl: './tree-editor.component.html',
  styleUrls: ['./tree-editor.component.css']
})
export class TreeEditorComponent implements OnInit {

  @Input() treeNodes;
  @Input() treeEdges;
  nodeSize = 40;
  offset = 150;
  height = null;
  width = null;

  constructor() { }

  ngOnInit() {
    this.height = document.documentElement.clientHeight - this.offset;
    this.width = document.getElementById('tree-editor').offsetWidth;
  }

  onResize() {
    this.height = Math.max(this.height, document.documentElement.clientHeight) - this.offset;
    this.width = Math.max(this.width, document.getElementById('tree-editor').offsetWidth);
  }



}
