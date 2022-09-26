import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { DkzTreeviewItem } from '../../models/dkz-treeview.model';

@Component({
  selector: 'dkz-treeview',
  styleUrls: ['./dkz-treeview.component.scss'],
  template: `<div #dkztreeviewstructure></div>`
})
export class DkzTreeviewComponent implements OnInit {
  @ViewChild('dkztreeviewstructure', { read: ElementRef }) orgstructureDiv!: ElementRef;
  orgstructureUl!: HTMLUListElement;
  
  @Input() set model(data: DkzTreeviewItem[]){
    this.orgstructureUl =
      this.buildHtml(data, true, 'dkz-treeview');
  }
  @Output() add = new EventEmitter<string>();
  @Output() edit = new EventEmitter<string>();
  @Output() delete = new EventEmitter<string>();

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.renderer.appendChild(this.orgstructureDiv.nativeElement, this.orgstructureUl);
    this.setSelectScript();
  }

  buildHtml(arr: DkzTreeviewItem[], outerUl = false, outerUlClass = ''): HTMLUListElement {
    const newUl = this.renderer.createElement("ul");
    if (outerUl) {
      this.renderer.addClass(newUl, outerUlClass);
    } else {
      this.renderer.addClass(newUl, 'nested');
    }

    for (let i = 0; i < arr.length; i++) {
      const org = arr[i];
      const newLi = this.renderer.createElement("li");
      if (org.children?.length) {
        //add span with caret
        const caretSpan = this.renderer.createElement("span");
        this.renderer.addClass(caretSpan, 'caret');
        this.renderer.addClass(caretSpan, 'bi');
        this.renderer.addClass(caretSpan, 'bi-caret-right-fill');
        this.renderer.addClass(caretSpan, 'cursor-pointer');
        this.renderer.appendChild(newLi, caretSpan);
        //add span with text
        const textSpan = this.renderer.createElement("span");
        let text = this.renderer.createText(org.name);
        this.renderer.appendChild(textSpan, text);
        this.renderer.appendChild(newLi, textSpan);
        //add crud spans
        const crudSpan = this.createCrudSpans(org.id);
        this.renderer.appendChild(newLi, crudSpan);        
        //add inner ul
        const childUl = this.buildHtml(org.children);
        this.renderer.appendChild(newLi, childUl);
      } else {
        let text = this.renderer.createText(org.name);        
        this.renderer.appendChild(newLi, text);
        //add crud spans
        const crudSpan = this.createCrudSpans(org.id);
        this.renderer.appendChild(newLi, crudSpan);   
      }
      this.renderer.appendChild(newUl, newLi);
    }
    return newUl;
  }

  createCrudSpans(id: string): any{
    const crudSpan = this.renderer.createElement("span");
    this.renderer.addClass(crudSpan, 'crud-span');
    //add create icon        
    const addSpan = this.renderer.createElement("span");
    this.renderer.addClass(addSpan, 'bi');
    this.renderer.addClass(addSpan, 'bi-plus-circle');
    this.renderer.addClass(addSpan, 'cursor-pointer');
    this.renderer.listen(addSpan, 'click', () => {
      this.add.emit(id);
    });
    this.renderer.appendChild(crudSpan, addSpan);    
    //add edit icon        
    const editSpan = this.renderer.createElement("span");
    this.renderer.addClass(editSpan, 'bi');
    this.renderer.addClass(editSpan, 'bi-pencil-square');
    this.renderer.addClass(editSpan, 'cursor-pointer');
    this.renderer.listen(editSpan, 'click', () => {
      this.edit.emit(id);
    });
    this.renderer.appendChild(crudSpan, editSpan);
    //add edit delete        
    const deleteSpan = this.renderer.createElement("span");
    this.renderer.addClass(deleteSpan, 'bi');
    this.renderer.addClass(deleteSpan, 'bi-trash-fill');
    this.renderer.addClass(deleteSpan, 'cursor-pointer');
    this.renderer.listen(deleteSpan, 'click', () => {
      this.delete.emit(id);
    });
    this.renderer.appendChild(crudSpan, deleteSpan);
    return crudSpan;
  }

  setSelectScript(){
    let togglers = document.getElementsByClassName("caret");
    for (let i = 0; i < togglers.length; i++) {
      const elt = togglers[i];
      elt.addEventListener('click', () => {
        elt.parentElement?.querySelector('.nested')
          ?.classList.toggle("active");
        if(elt.classList.contains('bi-caret-right-fill')){
          elt.classList.remove('bi-caret-right-fill');
          elt.classList.add('bi-caret-down-fill');
        }else {
          elt.classList.remove('bi-caret-down-fill');
          elt.classList.add('bi-caret-right-fill');
        }
      })
    }

  }
}
