export class Another {
  another2: string;

  constructor() {
    this.another2 = "hej hej";
  }
  myFunc(number, ...theRest) {
    console.log("hello from another.ts" + number);
    console.log(theRest);
    let total = 0;
    for( var i = 0; i < theRest.length; i ++) {
      total +=  theRest[i];
    }
    console.log(total);
  }
}
