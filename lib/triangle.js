'use strict';

function Triangle(side1, side2, side3){

    if(side1 == 0 || side2 == 0 || side3 == 0) {
        throw new Error("Invalid Triangle");
    }
    //sides
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;

    // types of triangle
    this.isEquilateral = this.side1 == this.side2 && this.side1 == this.side3 && this.side2 == this.side3;
    this.isIsosceles = this.side1 == this.side2 || this.side1 == this.side3 || this.side2 == this.side3;
    this.isScalene = !this.isEquilateral;
};

Triangle.prototype.kind = function(){
    if(this.isEquilateral) {
        return 'equilateral';
    } else if (this.isIsosceles) {
        return 'isosceles';
    } else if (this.isScalene) {
        return 'scalene';
    }
}


