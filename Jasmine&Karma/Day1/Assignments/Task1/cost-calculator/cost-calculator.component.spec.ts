import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CostCalculatorComponent } from './cost-calculator.component';

describe('CostCalculatorComponent', () => {
  let component: CostCalculatorComponent;
  let fixture: ComponentFixture<CostCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostCalculatorComponent ],
      imports : [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // 2.Testing component properties
it('default value of Quantity should be 1', () => {
  const QuantityOutput:number  = component.Quantity;
  expect(QuantityOutput).toBe(1);
});


it('result property should be empty as default value', () => {
  const strOutput:string  = component.result;
  expect(strOutput).toBe("");
});

it('result should contain "Total Price is.." for valid quantity', () => {

  component.Quantity = 5;
  component.CalculateCost();
  const strOutput:string  = component.result;
  expect(strOutput).toBe("Total Price is "+component.TotalPrice);
});

it('result should contain " Please enter valid quantity" for valid quantity', () => {

  component.Quantity = -1;
  component.CalculateCost();
  const strOutput:string  = component.result;
  expect(strOutput).toBe("Please enter valid quantity");
});

// 7.Testing Component Templates --- get/set value to textbox
it('should set the value "10" to quantity textbox and update component property', () => {

  let inputObj = fixture.nativeElement.querySelector('input');
  inputObj.value = 10;
  console.log(inputObj.value);
  inputObj.dispatchEvent(new Event('input'));

   expect(component.Quantity).toBe(10);
 });

  //10.Testing Component Templates --- events, data binding
  it('result should contain "Total Price is.." for valid quantity', () => {

    const inputArray =  fixture.nativeElement.querySelector("input");
  
    inputArray.value = 20;
    inputArray.dispatchEvent(new Event('input'));    
  
    let inputObj = fixture.nativeElement.querySelector('button');
    inputObj.dispatchEvent(new Event('click'));
  
    //console.log(component.result);  // should modify paragraph
    fixture.detectChanges();
  
    let parObj = fixture.nativeElement.querySelector('span');
    expect(parObj.textContent).toBe("Total Price is "+component.TotalPrice);
  });

});
