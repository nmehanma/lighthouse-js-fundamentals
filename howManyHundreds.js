function howManyHundreds(num){
  var a = Math.floor(num);
  var b = 100;
  
  var i = a % b;
  var i2 = a - i

  return solution = i2 / b;

}


console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);