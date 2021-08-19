"use strict";

let inputTextarea = document.querySelectorAll('.input-textarea');
let outputDiv = document.querySelectorAll('.dream-output');
let saveButton = document.querySelectorAll('.save-button');

outputDiv.textContent = localStorage.getItem('dreams');
inputTextarea.value = localStorage.getItem('dreams');

function updateOutput() {

    localStorage.setItem('dreams', JSON.stringify(inputTextarea.value));

    console.log(inputTextarea.value);

    outputDiv.textContent = inputTextarea.value;
    console.log(outputDiv.textContent);

}

function toggleTheme(theme) {
    const body = document.body;
    body.classList.remove('dark', 'light')
    if (theme == 'dark') {
        body.classList.add('dark')
    } else {
        body.classList.add('light')
    }
}