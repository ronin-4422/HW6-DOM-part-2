




// let figStyle = document.getElementById('figStyle').value;

let figure = document.querySelector('.figure');
let button = document.querySelector('button');
let selectElement = document.querySelector('.figStyle');

selectElement.addEventListener('change', (event) => {
    figure.setAttribute('class', 'figure ' + event.target.value);
  console.log(event.target.value);
});

button.onclick = function colorChoice() {
    let shapeColor = document.querySelector('input').value;
    figure.style.backgroundColor = shapeColor;
}



