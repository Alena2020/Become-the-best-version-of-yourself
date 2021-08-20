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
        checkboxesInTracker: [
        { name: "Monday", checked: false},
        { name: "Tuesday", checked: false},
        { name: "Wednes­day", checked: false},
        { name: "Thursday", checked: false},
        { name: "Friday", checked: false},
        { name: "Saturday", checked: false},
        { name: "Sunday", checked: false},
        ],       
    };

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

    weeklyTaskTracker.forEach(function(tracker, trackerIndex) {
        // Clear input weekly task tracker
        inputTracker.value = '';

        trackerTemplate += `
        <li>
            <span class="span-tracker">${tracker.trackerName}</span>`

        tracker.checkboxesInTracker.forEach((star, starIndex) => {
            trackerTemplate += `
            <div class="checkbox-day">
                <input type="checkbox" onclick="onCheckboxClicked(${trackerIndex}, ${starIndex})" ${star.checked  ? 'checked' : ''} class="active" />
                <label>${star.name}</label>
            </div>
            `
        });

        trackerTemplate += `
            <button class="delete-tracker-btn"  onclick="removeWeeklyTaskTracker(${trackerIndex})">Remove</button>
        </li>
        `;
    }); 
    trackerList.innerHTML = trackerTemplate;
} 

function updateLocalStorageForWeeklyTaskTracker() {
    localStorage.setItem("trackers", JSON.stringify(weeklyTaskTracker));
}

function removeWeeklyTaskTracker(trackerIndex) {
    // Remove  a weekly task tracker from local storage
    weeklyTaskTracker.splice(trackerIndex, 1);
    updateLocalStorageForWeeklyTaskTracker();
    showWeeklyTaskTracker();

    // Remove  a weekly task tracker from list
    return this.parentNode.remove();
}

// Updated Checkbox state  of weekly task tracker and save to local storage
function onCheckboxClicked(trackerIndex, starIndex) {
    weeklyTaskTracker[trackerIndex].checkboxesInTracker[starIndex].checked = !weeklyTaskTracker[trackerIndex].checkboxesInTracker[starIndex].checked;
    updateLocalStorageForWeeklyTaskTracker();
    showWeeklyTaskTracker();
}



// function test() {
//     weeklyTaskTracker.forEach((tracker, index) => {
//         console.log(tracker.trackerName);
//         tracker.checkboxesInTracker.forEach((star) => {
//             console.log(star.name);
//         });
//     });
// }




