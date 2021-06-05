import {
  ComponentRef,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
  Component,
  HostListener
} from '@angular/core';
import { ChildComponent } from '../child/child.component';

export enum KEY_CODE {
  UP_KEY = 38,
  DOWN_KEY = 40,
  RIGHT_KEY = 39,
  LEFT_KEY = 37,
  W_KEY = 87,
  A_KEY = 65,
  S_KEY = 83,
  D_KEY = 68,
  DELETE = 46
}
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  keyObj: [''];
  @ViewChild('viewContainerRef', { read: ViewContainerRef, static: true })
  VCR: ViewContainerRef;
  @ViewChild('parent', { static: true }) parent;
  @HostListener('window:keyup', ['$event']) keyUp(e: KeyboardEvent) {
     if (!this.toggleListenersValue) {
       switch(e.key){
        case  "ArrowUp":
        this.moveBox('T');
        break;
        case "ArrowDown":
        this.moveBox('D')
        break;
        case "ArrowRight":
        this.moveBox('R')
        break;
        case "ArrowLeft":
        this.moveBox('L')
        break;
        case "Delete":
        this.remove_me()
        break;
        case 'w':
        this.moveBox('T')
        break;
        case 's':
        this.moveBox('D')
        break;
        case 'a':
         this.moveBox('L')
        break;
        case 'd':
        this.moveBox('R')
         break;
        case 'W':
        this.moveBox('T')
        break;
        case 'S':
        this.moveBox('D')
        break;
        case 'A':
         this.moveBox('L')
        break;
        case 'D':
        this.moveBox('R')
         break;
       }
     }
    // alert('key up'+ e.key);
  }
 
  toggleListenersValue: boolean = false;

  child_unique_key: number = 0;
  componentsReferences = Array<ComponentRef<ChildComponent>>();

  selectedUniqueKey = 0;
  constructor(private CFR: ComponentFactoryResolver) {}

  createComponent() {
    let componentFactory = this.CFR.resolveComponentFactory(ChildComponent);

    let childComponentRef = this.VCR.createComponent(componentFactory);

    let childComponent = childComponentRef.instance;
    childComponent.unique_key = ++this.child_unique_key;
    childComponent.left = 10;
    childComponent.top = 10;
    childComponent.parentRef = this;

    // add reference for newly created component
    this.componentsReferences.push(childComponentRef);
  }

  select(key: number) {
    if (this.selectedUniqueKey) {
      let componentRef = this.componentsReferences.filter(
        x => x.instance.unique_key == this.selectedUniqueKey
      )[0];
      componentRef.instance.isBoxSelected = false;
    }
    this.selectedUniqueKey = key;
  }

  remove_me() {
    // if (this.VCR.length < 1 || this.selectedUniqueKey) return;
    
    let componentRef = this.componentsReferences.filter(
      x => x.instance.unique_key == this.selectedUniqueKey
    )[0];
    
    let vcrIndex: number = this.VCR.indexOf(componentRef.hostView);
    // removing component from container
    this.VCR.remove(vcrIndex);

    // removing component from the list
    this.componentsReferences.filter(
      x => x.instance.unique_key !== this.selectedUniqueKey
    );
  }

  moveBox(direction: string) {
    let componentRef = this.componentsReferences.filter(
      x => x.instance.unique_key == this.selectedUniqueKey
    )[0];
    switch (direction) {
      case 'R':
        if (
          componentRef.instance.left + 1 <
          this.parent.nativeElement.offsetWidth - 62
        )
          componentRef.instance.left += 10;
        break;
      case 'D':
        if (
          componentRef.instance.top + 1 <
          this.parent.nativeElement.offsetHeight - 62
        )
          componentRef.instance.top += 10;
        break;
      case 'L':
        if (componentRef.instance.left - 1 > 10)
          componentRef.instance.left -= 10;
        break;
      case 'T':
        if (componentRef.instance.top - 1 > 10) componentRef.instance.top -= 10;
        break;
    }
  }

  toggleListeners() {
    this.toggleListenersValue = !this.toggleListenersValue;
  }
}
