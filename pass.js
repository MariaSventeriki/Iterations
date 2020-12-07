let password = 123;
let type = parseInt(prompt('please type in your Password'));

while (type != password){
        type = prompt('Wrong password');
}
if (type == password){
    alert('Correct Password');
}


/*let password;
​
while (true){
    password = parseInt(prompt('please type in your Password'));
​
    if (password == '123'){
        alert('Correct Password');
        break;
    }else{
        alert('Incorrect password,Please try again');
    }
}*/
