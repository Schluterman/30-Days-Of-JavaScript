function outerFunction() {
    let count = 0;
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }
    function squared(){
        (count * count)
        return count
    }
    return {
        plusOne:plusOne(),
        minusOne:minusOne(),
        squared:squared()
    }
}
const innerFuncs = outerFunction()

console.log(innerFuncs.plusOne)
console.log(innerFuncs.minusOne)
console.log(innerFuncs.squared)

function outerFunc() {
    function innerFunc(a, b) {
      return a + b;
    }
  
    return innerFunc;
  }
  
  const innerFunc = outerFunc();
  
  console.log(innerFunc(2, 3)); // 👉️ 5
  console.log(innerFunc(3, 3)); // 👉️ 6
  
  