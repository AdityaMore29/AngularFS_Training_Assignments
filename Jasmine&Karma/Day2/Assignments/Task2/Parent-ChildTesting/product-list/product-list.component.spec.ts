import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    // 2. Test child component loading
    it('should render child component elements -- product-details', () => {
      const childComponent  = fixture.debugElement.query(By.css('app-product-details'));
      expect(childComponent).toBeTruthy();
    });

     // 3. Test all child components
  it('should render all child component elements -- product-details', () => {
    const childComponents  = fixture.debugElement.queryAll(By.css('app-product-details'));
    expect(childComponents.length).toBe(component.productArr.length);
  });

  it('testing child component data -- product-details', () => {
    const testObj:any = { PId : 1, PName: "product1", Price: 100, Category: "category1", Qty: 4 };
    const childComponent  = fixture.debugElement.query(By.css('app-product-details'));
    
    expect(childComponent.properties["prodObj"]).toEqual( component.productArr[0] );
  });

  // 5. Test child component events
  it('testing child component events -- onProdRemove', () => {
    const childComponent  = fixture.debugElement.query(By.css('app-product-details'));
    const pId = childComponent.properties["prodObj"].PId;

    
    childComponent.triggerEventHandler('onProdRemoved', pId)
    

    let index = component.productArr.findIndex( (item:any) => item.PId == pId);
    expect(index).toBe(-1);
  });

});
