document.getElementById('myButton').addEventListener('click',function() {
    
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;
    let result = (nb1,nb2) => {return nb1*nb2};
    let p = document.createElement('p');
    p.innerHTML = result(number1,number2);
    document.getElementById('main').appendChild(p);

})




// let number1= parseInt(prompt('entrez un nombre'));
// let number2= parseInt(prompt('entrez un autre nombre'));

// console.log (product(number1,number2));


