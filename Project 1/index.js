shownotes();
let addBtn = document.getElementById("addbtn");


addBtn.addEventListener("click", function (e) {
  let notes = localStorage.getItem("notes");

  // Check local Storage
  // And get item from localStorage as object

  if (notes == undefined) {
    notesobj = [];
  } else {
    //   Get array as object from localStorage to push an another notes
    notesobj = JSON.parse(notes);
  }

  // Adding text area's or user enter content in the local storage.
  let addTxt = document.getElementById("addtxt");
  // added new feature
  let addTitle = document.getElementById("addTitle");

  if (addTitle.value == "") {
    addTitle.value = "note";
  }

  let CombineObj = {
    title: addTitle.value,
    text: addTxt.value,
  };


  // End here
  if (addtxt.value != "") {
    notesobj.push(CombineObj);
    addTxt.value = "";
    addTitle.value = "";
  } else {
    let alert = document.getElementById("alert");
    alert.innerHTML = `<div class="alert alert-danger" role="alert">
        <h4 class="alert-heading">Oops!</h4>
        <p>Your note box is empty</p>
        </div>`;
    setTimeout(() => {
      alert.innerHTML = "";
    }, 1500);
  }

  
  // Adding notes as a string into the array
  localStorage.setItem("notes", JSON.stringify(notesobj));
  // console.log(notesobj);
  shownotes();
});


/*
-----------------------------------------------------
    Implement the Display Notes Functionality
-----------------------------------------------------
*/ 

function shownotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }

  let html = "";
  notesobj.forEach(function (element, index) {
    html += `<div class="card my-3 mx-3 noteCard" style="width: 18rem;">
      <div class="card-body">
          <h5 class="card-title">${element.title}</h5>      
          <p class="card-text text-justify">${element.text}</p>              
          <button onclick= "deleteNote(this.id)" class="btn btn-primary"
          id="${index}">Delete Note</button>
      </div>
    </div>`;
  });
  noteselem = document.getElementById("notes");
  if (noteselem.length != 0) {
    noteselem.innerHTML = html;
  } else {
    noteselem.innerHTML = `Nothing to show click on " Add Note "`;
  }
}


/*
    -----------------------------------------------------
      Implement the Delete Functionality
    -----------------------------------------------------
*/ 


function deleteNote(index) {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  notesobj.splice(index, 1);

  // Update the local Storage
  localStorage.setItem("notes", JSON.stringify(notesobj));
  shownotes();
}


/*
    -----------------------------------------------------
      Implement the Search Functionality
    -----------------------------------------------------
*/ 

// Get the value of Search Bar
let srch = document.getElementById("srch");
// Add eventListener to get Search Bar value
srch.addEventListener("input", showSearchContent);

function showSearchContent() {
  let inPutValue = srch.value.toLowerCase();

  // Get all user add notes to match search input

  let noteCard = document.getElementsByClassName("noteCard");
  // console.log(noteCard);

  Array.from(noteCard).forEach((element) => {

    // Get internal text of user's notes to match the content

    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    // Here we are checking condition for matching text

    if (cardTxt.includes(inPutValue)) {
      // Show match Notes
      element.style.display = "block";
    } else {
      // Hidden(Block) Notes that are not matched from the notes
      element.style.display = "none";
    }

  });

}

// The Project has End Here :) :)
