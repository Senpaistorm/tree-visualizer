import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { BinarySearchTreeComponent } from './components/binary-search-tree/binary-search-tree.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    WorkspaceComponent,
    TutorialComponent,
    BinarySearchTreeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: HomepageComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
