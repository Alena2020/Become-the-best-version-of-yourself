"use strict";

let trackerList = document.querySelector('#tracker-list');
let inputTracker = document.querySelector('#input-tracker');
let weeklyTaskTracker = [
    // .. tasks tracker objects 
];

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

