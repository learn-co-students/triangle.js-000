'use strict';

function Triangle(side1, side2, side3){
  var newArray = new Array();
  newArray.push(side1, side2, side3);
  newArray.sort()
  this.side1 = newArray[0];
  this.side2 = newArray[1];
  this.side3 = newArray[2];
  if (this.side1 == 0 || (this.side1 + this.side2) <= this.side3){
    throw new TriangleError()
  } else
    newArray
};

Triangle.prototype.kind = function(){
    if (this.side1 == 0 || (this.side1 + this.side2) <= this.side3){
    throw new TriangleError();
  } else if (this.side1 == this.side3){
    return "equilateral"
  } else if (this.side1 == this.side2 || this.side2 == this.side3){
    return "isosceles"
  } else 
    return "scalene"



}

function TriangleError(message) {
  this.name = 'TriangleError';
  this.message = 'That ain\'t a good trianlge, son!';
}
TriangleError.prototype = Object.create(Error.prototype);
TriangleError.prototype.constructor = TriangleError;