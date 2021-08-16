"use strict";


//To-Do List
let listTask = document.querySelector('#task-list');
let inputTask = document.querySelector('#input-task');
let toDoList = [
    // .. tasks objects
];
//Weekly Task Tracker
let trackerList = document.querySelector('#tracker-list');
let inputTracker = document.querySelector('#input-tracker');
let weeklyTaskTracker = [
    // .. tasks tracker objects 
];
//Wish List
let wishesList = document.querySelector('#wishes-list');
let inputWish = document.querySelector('#input-wish');
let wishList = [
    // .. wish objects
];
//Ideas
let ideasList = document.querySelector('#ideas-list');
let inputIdea = document.querySelector('#input-idea');
let ideas = [
    // .. ideas objects
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
        inputTask.value = '';

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

    // Remove  a task from list
    return this.parentNode.remove();
}

// Update state of task and save to local storage
function checkedTask(index) {
    toDoList[index].checked = !toDoList[index].checked;
    updateLocalStorage();
    showTasks();
}

//Weekly Task Tracker
function loadLocalStorageForWeeklyTaskTracker() {
    //We will use local storage to store the weekly task tracker. The localStorage property allows saving key/value pairs right in a web browser.
    if (localStorage.getItem("trackers")) {
        weeklyTaskTracker = JSON.parse(localStorage.getItem("trackers")) || [];
        showWeeklyTaskTracker();
    }
}

loadLocalStorageForWeeklyTaskTracker();

function addWeeklyTaskTracker() {

    let newTracker = {
        trackerName: inputTracker.value,
        checked: false
    }

    if (inputTracker.value !== "") {
        // Add weekly task tracker to list and localstorage
        weeklyTaskTracker.push(newTracker);
        showWeeklyTaskTracker();
        updateLocalStorageForWeeklyTaskTracker();
    }
}

//Show weekly task tracker on the screen
function showWeeklyTaskTracker() {
    let trackerTemplate = '';

    weeklyTaskTracker.forEach(function(item, index) {
        // Clear input weekly task tracker
        inputTracker.value = '';

        trackerTemplate += `
        <li>            
            <span class="span-tracker">${item.trackerName}</span>
            <div class="checkbox-day">
                <input type="checkbox" onclick="checkedWeeklyTaskTracker(${index})" ${item.checked ? 'checked' : ''} id="checkbox-monday" class="active" />
                <label for="checkbox-monday">Monday</label>          
            </div>
            <div class="checkbox-day">
                <input type="checkbox" onclick="checkedWeeklyTaskTracker(${index})" ${item.checked ? 'checked' : ''} id="checkbox-tuesday" />
                <label for="checkbox-tuesday">Tuesday</label>
            </div>
            <div class="checkbox-day">
                <input type="checkbox" onclick="checkedWeeklyTaskTracker(${index})" ${item.checked ? 'checked' : ''} id="checkbox-wednes­day" />
                <label for="checkbox-wednes­day">Wednes­day</label>
            </div>
            <div class="checkbox-day">
                <input type="checkbox" onclick="checkedWeeklyTaskTracker(${index})" ${item.checked ? 'checked' : ''} id="checkbox-thursday" />
                <label for="checkbox-thursday">Thursday</label>
            </div>
            <div class="checkbox-day">
                <input type="checkbox" onclick="checkedWeeklyTaskTracker(${index})" ${item.checked ? 'checked' : ''} id="checkbox-friday" />
                <label for="checkbox-friday">Friday</label>
            </div>
            <div class="checkbox-day">
                <input type="checkbox" onclick="checkedWeeklyTaskTracker(${index})" ${item.checked ? 'checked' : ''} id="checkbox-saturday" />
                <label for="checkbox-saturday">Saturday</label>
            </div>
            <div class="checkbox-day">
                <input type="checkbox" onclick="checkedWeeklyTaskTracker(${index})" ${item.checked ? 'checked' : ''} id="checkbox-sunday" />
                <label for="checkbox-sunday">Sunday</label>
            </div>     
            <button class="delete-tracker-btn"  onclick="removeWeeklyTaskTracker(${index})">Remove</button>
        </li>
        `;
    });

    trackerList.innerHTML = trackerTemplate;
}

function updateLocalStorageForWeeklyTaskTracker() {
    localStorage.setItem("trackers", JSON.stringify(weeklyTaskTracker));
}

function removeWeeklyTaskTracker(index) {
    // Remove  a weekly task tracker from local storage
    weeklyTaskTracker.splice(index, 1);
    updateLocalStorageForWeeklyTaskTracker();
    showWeeklyTaskTracker();

    // Remove  a weekly task tracker from list
    return this.parentNode.remove();
}

// Update state of weekly task tracker and save to local storage
function checkedWeeklyTaskTracker(index) {
    weeklyTaskTracker[index].checked = !weeklyTaskTracker[index].checked;
    updateLocalStorageForWeeklyTaskTracker();
    showWeeklyTaskTracker();
}



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
        inputWish.value = '';

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


function toggleTheme(theme) {
    const body = document.body;
    body.classList.remove('dark', 'light')
    if (theme == 'dark') {
        body.classList.add('dark')
    } else {
        body.classList.add('light')
    }
}