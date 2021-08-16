"use strict";


//To-Do List
let listTask = document.querySelector('#task-list');
let inputTask = document.querySelector('#input-task');
let toDoList = [
    // .. tasks objects
];
//Wish List
let wishesList = document.querySelector('#wishes-list');
let inputWish = document.querySelector('#input-wish');
let wishList = [
    // .. wish objects
];


//To-Do List
function loadLocalStorage() {
    //We will use local storage to store the tasks. The localStorage property allows saving key/value pairs right in a web browser.
    if (localStorage.getItem("tasks")) {
        toDoList = JSON.parse(localStorage.getItem("tasks")) || [];
        showTasks();
    }
}

loadLocalStorage();

function addTask() {

    let newTask = {
        taskName: inputTask.value,
        checked: false
    }

    if (inputTask.value !== "") {
        // Add task to list and localstorage
        toDoList.push(newTask);
        showTasks();
        updateLocalStorage();
    }
}

//Show tasks on the screen
function showTasks() {
    let tasksTemplate = '';

    toDoList.forEach(function(item, index) {
        // Clear input task
        document.getElementById("input-task").value = '';

        tasksTemplate += `
        <li>
            <input type="checkbox" class="check" onclick="checkedTask(${index})" ${item.checked ? 'checked' : ''}>
            <span class="span-task">${item.taskName}</span>
            <button class="delete-btn"  onclick="removeTask(${index})">Remove</button>
        </li>
        `;
    });

    listTask.innerHTML = tasksTemplate;
}

function updateLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(toDoList));
}

function removeTask(index) {
    // Remove  a task from local storage
    toDoList.splice(index, 1);
    updateLocalStorage();
    showTasks();

    // Remove  a task from from list
    return this.parentNode.remove();
}

// Update state of task and save to local storage
function checkedTask(index) {
    toDoList[index].checked = !toDoList[index].checked;
    updateLocalStorage();
    showTasks();
}

//Weekly Task Tracker


//Wish List

function loadLocalStorageForWishList() {
    //We will use local storage to store the wishes. The localStorage property allows saving key/value pairs right in a web browser.
    if (localStorage.getItem("wishes")) {
        wishList = JSON.parse(localStorage.getItem("wishes")) || [];
        showWishes();
    }
}

loadLocalStorageForWishList();

function addWish() {

    let newWish = {
        wishName: inputWish.value,
        checked: false
    }

    if (inputWish.value !== "") {
        // Add wish to list and localstorage
        wishList.push(newWish);
        showWishes();
        updateLocalStorageForWishList();
    }
}

//Show wishes on the screen
function showWishes() {
    let wishesTemplate = '';

    wishList.forEach(function(item, index) {
        // Clear input wish
        document.getElementById("input-wish").value = '';

        wishesTemplate += `
        <li>
            <input type="checkbox" class="check" onclick="checkedWish(${index})" ${item.checked ? 'checked' : ''}>
            <span class="span-wish">${item.wishName}</span>
            <button class="delete-wish-btn"  onclick="removeWish(${index})">Remove</button>
        </li>
        `;
    });

    wishesList.innerHTML = wishesTemplate;
}

function updateLocalStorageForWishList() {
    localStorage.setItem("wishes", JSON.stringify(wishList));
}

function removeWish(index) {
    // Remove  a wish from local storage
    wishList.splice(index, 1);
    updateLocalStorageForWishList();
    showWishes();

    // Remove  a wish from list
    return this.parentNode.remove();
}

// Update state of wish and save to local storage
function checkedWish(index) {
    wishList[index].checked = !wishList[index].checked;
    updateLocalStorageForWishList();
    showWishes();
}

//Ideas





function toggleTheme(theme) {
    const body = document.body;
    body.classList.remove('dark', 'light')
    if (theme == 'dark') {
        body.classList.add('dark')
    } else {
        body.classList.add('light')
    }
}