let fizzBuzz = parseInt(prompt('please type a number'));
if (fizzBuzz % 15 == 0){
    alert(`${fizzBuzz} is fizz `);
}else if (fizzBuzz % 3 == 0){
    alert(` ${fizzBuzz} is Buzz`);
}else if (fizzBuzz % 5 == 0) {
        alert("Buzz");
}else {
    alert( `${fizzBuzz} is neither fizz or buzz`);
}