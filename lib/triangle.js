'use strict';

function Triangle(a,b,c){
debugger;
  if (a + b > c && b + c > a && a + c > b) {
    this.kind = function() {

      if (a + b + c === a * 3) {
        return "equilateral";
      } else if (a === b || b === c || c === a) {
        return "isosceles";
      } else {
        return "scalene"
      }

    };

  } else {
    throw new Error("Invalid Triangle");
  }
  

};