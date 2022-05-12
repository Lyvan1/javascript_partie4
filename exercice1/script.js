document.getElementById('myButton').addEventListener('click',function() {
    let result = document.getElementById('number1').value * document.getElementById('number2').value;
    let p = document.createElement('p');
    p.innerHTML = result;
    document.getElementById('main').appendChild(p);
})



// let number1= parseInt(prompt('entrez un nombre'));
// let number2= parseInt(prompt('entrez un autre nombre'));

// console.log (product(number1,number2));


