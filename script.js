var eng =85;// funtion scope 

let math = 60; //locally scope
const pie =3.14; // cant reassign


function example() {
    var x = 10;
    let y = 20;
  
    if (true) {
      var innerVar = 30;
      let innerLet = 40;
      console.log(x);        // 10 (accessible)
      console.log(y);        // 20 (accessible)
      console.log(innerVar); // 30 (accessible)
      console.log(innerLet); // 40 (accessible)
    }
  
    console.log(x);          // 10 (accessible)
    console.log(y);          // 20 (accessible)
    console.log(innerVar);   // 30 (accessible)
    console.log(innerLet);   // ReferenceError: innerLet is not defined
  }