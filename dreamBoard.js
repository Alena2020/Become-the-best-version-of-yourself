"use strict";

let dreamList = document.querySelector('#dream-list');
let dreamBoard = ["Friends", "Family",  "House", "Travelling", "Hobby", "Brightness of life", "Lifestyle", "Sports", "Health", "Work",  "Skills", "Finance"];

console.log( dreamBoard);

function loadDreamBoard() {
  let dreamsTemplate = '';

  dreamBoard.forEach(function(dream) {    
    dreamsTemplate += `
          <li class="card-dream">
              <h4>${dream}</h4>
              <textarea class="input-dream" placeholder="Your dreams here"></textarea>       
          </li>
        `;

    dreamList.innerHTML = dreamsTemplate;
});
  
}
loadDreamBoard();



