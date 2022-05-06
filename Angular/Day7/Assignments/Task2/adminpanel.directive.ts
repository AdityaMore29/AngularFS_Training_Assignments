import { Directive, OnChanges,Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAdminpanel]'
})
export class AdminpanelDirective implements OnChanges {

  @Input()

  appAdminpanel: string = '';



  constructor(private viewContainer: ViewContainerRef,

    private templateRef: TemplateRef<any>) { }

    ngOnChanges() {



      if (this.appAdminpanel.toLocaleLowerCase() != 'sam') {
  
       
  
        this.viewContainer.createEmbeddedView(this.templateRef);
  
      }
  
      else {
  
       
  
        this.viewContainer.clear();
  
      }
  
    }
}
