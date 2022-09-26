import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DkzTreeviewComponent } from './components/dkz-treeview/dkz-treeview.component';



@NgModule({
  declarations: [
    DkzTreeviewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DkzTreeviewComponent
  ]
})
export class DkzTreeviewModule { }
