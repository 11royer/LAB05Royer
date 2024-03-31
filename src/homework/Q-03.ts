(() => {

  /* Idente el siguiente codigo y de espacios */

class Person {
  constructor(private name: string, private age: number){}
  getName(): string { return this.name; }
  setName(name: string): void { this.name = name; }
  getAge(): number { return this.age; }
  setAge(age: number): void { this.age=age; }
}


function weirdFunction() {
  const a=5;
  const b=333; 
  const result=a+b;
  console.log('asd');
  const newResult=result*10;
  const arr=[1,2,3,4,5];
  const b2=arr.map(element=> {
    return element*newResult
  });
  console.log(b2);
}

weirdFunction();

})();