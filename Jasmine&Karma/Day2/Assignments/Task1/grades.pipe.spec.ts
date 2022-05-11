import { GradesPipe } from './grades.pipe';

describe('GradesPipe', () => {

  let pipe:GradesPipe;

  beforeEach(() => {
    pipe = new GradesPipe();
  });

  it('create an instance', () => {
    // const pipe = new GradesPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return "Outstanding" when input is 1 ', () => {
    const result:string  = pipe.transform(1);
    expect(result).toBe("Outstanding");
  });

  it('should return "Excellent" when input is 2 ', () => {
    const result:string  = pipe.transform(2);
    expect(result).toBe("Excellent");
  });

  it('should return "Good" when input is 3 ', () => {
    const result:string  = pipe.transform(3);
    expect(result).toBe("Good");
  });

  it('should return "Invalid" when input is "46" ', () => {
    const result:string  = pipe.transform(46);
    expect(result).toBe("Invalid");
  });

});
