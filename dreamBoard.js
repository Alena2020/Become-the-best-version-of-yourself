"use strict";

let inputDreams = 'Your dreams here...';
let dreamList = document.querySelector('#dream-list');
let dreams = [
        {dreamName: "Friends", dreamText: ''},
        {dreamName: "Family", dreamText: ''},
        {dreamName: "House", dreamText: ''},
        {dreamName: "Travelling", dreamText: ''},
        {dreamName: "Hobby", dreamText: ''},
        {dreamName: "Brightness of life", dreamText: ''},
        {dreamName: "Lifestyle", dreamText: ''},
        {dreamName: "Sports", dreamText: ''},
        {dreamName: "Health", dreamText: ''},
        {dreamName: "Work", dreamText: ''},
        {dreamName: "Skills", dreamText: ''},
        {dreamName: "Finance", dreamText: ''}
];

updateLocalStorageforDreamBoard();

function loadLocalStorageForDreamBoard() {
    //We will use local storage to store the dreams. The localStorage property allows saving key/value pairs right in a web browser.
    if (localStorage.getItem("dreams")) {
        dreams = JSON.parse(localStorage.getItem("dreams"));       
        showDreamBoard();
    }
}

loadLocalStorageForDreamBoard();

function showDreamBoard() {
  let dreamsTemplate = '';

  dreams.forEach(function(dream, index) {    
    dreamsTemplate += `
          <li class="card-dream">
              <h4>${dream.dreamName}</h4>
              <textarea class="input-dream" placeholder="Your dreams here" id="${index}" >${dream.dreamText }</textarea>       
          </li>
        `;

    dreamList.innerHTML = dreamsTemplate;     
  });
  updateLocalStorageforDreamBoard();
}

showDreamBoard();

updateLocalStorageforDreamBoard();

function updateLocalStorageforDreamBoard() {    
    localStorage.getItem('dreams', JSON.stringify(dreams));    
}

function updateDreams() {
  inputDreams = document.querySelector('.input-dream');  
  for (let index = 0; index < dreams.length; index++) {
    //let dream = dreams[index];
    dreams[index] = inputDreams[index];
  }
  updateLocalStorageforDreamBoard();
}

updateDreams();