import { TestBed } from '@angular/core/testing';

import { DeptService } from './dept.service';

describe('DeptService', () => {
  let service: DeptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('this should return Data Length from service after removing',
    (done: DoneFn) => {
   
   let datalength= service.dataArray.length-1;
   let result= service.RemoveDept(1);
   console.log(result+": Removing");
   done();
   expect(result).toBe(datalength);
  });
  
  it('this should return Data Length from service after adding',
    (done: DoneFn) => {
   let deptobj={ID:8,name:"New"}
   
   let result= service.AddDept(deptobj);
   let datalength= service.dataArray.length;
   console.log(result+": Adding");
   done();
   expect(result).toBe(datalength);
  });

});
