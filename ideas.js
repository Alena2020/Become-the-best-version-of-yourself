"use strict";

let ideasList = document.querySelector('#ideas-list');
let inputIdea = document.querySelector('#input-idea');
let ideas = [
    // .. ideas objects
];

function loadLocalStorageForIdeas() {
    //We will use local storage to store the ideas. The localStorage property allows saving key/value pairs right in a web browser.
    if (localStorage.getItem("ideas")) {
        ideas = JSON.parse(localStorage.getItem("ideas")) || [];
        showIdeas();
    }
}

loadLocalStorageForIdeas();

function addIdea() {

    let newIdea = {
        ideaName: inputIdea.value,
        checked: false
    }

    if (inputIdea.value !== "") {
        // Add idea to list and localstorage
        ideas.push(newIdea);
        showIdeas();
        updateLocalStorageForIdeas();
    }
}

//Show ideas on the screen
function showIdeas() {
    let ideasTemplate = '';

    ideas.forEach(function(item, index) {
        // Clear input idea
        inputIdea.value = '';

        ideasTemplate += `
        <li>
            <input type="checkbox" class="check" onclick="checkedIdea(${index})" ${item.checked ? 'checked' : ''}>
            <span class="span-idea">${item.ideaName}</span>
            <button class="delete-idea-btn"  onclick="removeIdea(${index})">Remove</button>
        </li>
        `;
    });

    ideasList.innerHTML = ideasTemplate;
}

function updateLocalStorageForIdeas() {
    localStorage.setItem("ideas", JSON.stringify(ideas));
}

function removeIdea(index) {
    // Remove  a idea from local storage
    ideas.splice(index, 1);
    updateLocalStorageForIdeas();
    showIdeas();

    // Remove  a idea from list
    return this.parentNode.remove();
}

// Update state of idea and save to local storage
function checkedIdea(index) {
    ideas[index].checked = !ideas[index].checked;
    updateLocalStorageForIdeas();
    showIdeas();
}