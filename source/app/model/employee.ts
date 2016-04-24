
export class Employee {
  public age: number;
  
  test(){
    this.age = 10;
  }
  test1(){
    this.age = 10;
  }
  constructor (
    public id: number,
    public name: string
  ) {}
}
