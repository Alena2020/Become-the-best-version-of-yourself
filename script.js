"use strict";

document.getElementById("defaultOpen").click();

function toggleTheme(theme) {
    const body = document.body;
    body.classList.remove('dark', 'light')
    if (theme == 'dark') {
        body.classList.add('dark')
    } else {
        body.classList.add('light')
    }
}

function openSection(evt, sectionName) {
    let i;

  // Get all the elements using class= "section-content" and hide them
    let sectionContent = document.getElementsByClassName("section-content");
    for (i = 0; i < sectionContent.length; i++) {
    sectionContent[i].style.display = "none";
    }

  // Get all the elements using class= "menu-links" and delete class "active"
    let menuLinks = document.getElementsByClassName("menu-links");
    for (i = 0; i < menuLinks.length; i++) {
    menuLinks[i].className = menuLinks[i].className.replace(" active", "");
    }

  // Show the current tab and add an "active" class for the button that opened the tab
    document.getElementById(sectionName).style.display = "flex";
    evt.currentTarget.className += " active";
}