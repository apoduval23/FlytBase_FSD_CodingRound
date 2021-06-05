import { Component, OnInit, ComponentRef } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  public unique_key: number;
  public parentRef: ParentComponent;
  public isBoxSelected :boolean = false;
  public top :number=0;
  public left :number=0;
  constructor() {
  }
 selectBox(){
   this.isBoxSelected = true;
   console.log(this.unique_key)
   this.parentRef.select(this.unique_key);
 }
  // remove_me() {
  //   console.log(this.unique_key)
  //   this.parentRef.remove(this.unique_key)
  // }

}