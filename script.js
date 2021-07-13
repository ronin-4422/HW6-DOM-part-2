




// let figStyle = document.getElementById('figStyle').value;

let figure = document.querySelector('.figure');
let button = document.querySelector('button');
let selectElement = document.querySelector('.figStyle');

// selectElement.addEventListener('change', (event) => {
//     if (selectElement === 'square') {
//         figure.classList.add('square');
//     } else if (selectElement === 'triangle') {
//         figure.classList.add('triangle');
//     }
//   figure.textContent = `Your figure is ${event.target.value}`;
// });

button.onclick = function colorChoice() {
    let shapeColor = document.querySelector('input').value;
    figure.style.backgroundColor = shapeColor;
}



