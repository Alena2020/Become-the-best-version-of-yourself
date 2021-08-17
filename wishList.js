"use strict";

let wishesList = document.querySelector('#wishes-list');
let inputWish = document.querySelector('#input-wish');
let wishList = [
    // .. wish objects
];

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