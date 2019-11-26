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
    const navbarHeight = (document.getElementById('nav_bar').offsetHeight);
    const toolbarHeight = (document.getElementById('tool_bar').offsetHeight);

    this.offset = navbarHeight + toolbarHeight;
    this.height = document.documentElement.clientHeight - this.offset;
    this.width = document.getElementById('tree-editor').offsetWidth;
    console.log(this.width);
  }

  onResize() {
    this.height = Math.max(this.height, document.documentElement.clientHeight) - this.offset;
    this.width = Math.max(this.width, document.getElementById('tree-editor').offsetWidth);
  }



}
