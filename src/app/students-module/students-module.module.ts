import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { DisplayListComponent } from './display-list/display-list.component';
import { DisplayDetailComponent } from './display-detail/display-detail.component';



@NgModule({
  declarations: [
    ParentComponent,
    DisplayListComponent,
    DisplayDetailComponent
  ],
  imports: [
    CommonModule
  ],
 exports:[
  ParentComponent,
  DisplayListComponent,
  DisplayDetailComponent
 ]
})
export class StudentsModuleModule { }
