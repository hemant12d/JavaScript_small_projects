shownotes();
// Get notes value and it to localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", addNote);
function addNote() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let notetext = document.getElementById("notetext");
  // add new feature
  let addTitle = document.getElementById('addTitle');
  if (addTitle.value == ""){
    addTitle.value = "note";
  }
    let CombineObj = {
    title: addTitle.value,
    text: notetext.value
  };
  // End here
  
  if (CombineObj.text == "") {
    let alert = document.getElementById('alert');
    alert.innerHTML = `<div class="alert alert-primary" role="alert">
           Please! Write Something on the Notes
    </div>`;
    setTimeout(() => {
        alert.innerHTML = "";
    }, 1500);
  } else {
    notesObj.push(CombineObj);
    notetext.value = "";
    addTitle.value = "";
    localStorage.setItem("notes", JSON.stringify(notesObj));
  }
  shownotes();
}
// Display the Notes
function shownotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `<div class="eachNote m-x m-y f-d">
        <h4 class="m-x m-y">${element.title}</h4>
        <p class="m-x m-y">
        ${element.text}
        </p>
        <button class="m-x m-y btnDesign" id="${index}" onclick= "deleteNote(this.id)">Delete Note</button>
    </div>`;
  });
  let notesCollection = document.getElementById("notesCollection");
  if (notesCollection.length == 0) {
    notesCollection.innerText = "Nothing is available to show";
  } else {
    notesCollection.innerHTML = html;
  }
}
// Function to delete Notes
function deleteNote(index)
 {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else
   {
    notesobj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  shownotes();
}
// Search the notes
let srchbar = document.getElementById("srchbar");
srchbar.addEventListener("input", srchnote);

function srchnote(){
  let inputVal = srchbar.value.toLowerCase();
  let eachNote = document.getElementsByClassName("eachNote");
  Array.from(eachNote).forEach(function (element){
     each = element.getElementsByTagName("p")[0].innerText;
     let eachLowerCaseText = each.toLowerCase();
    if (eachLowerCaseText.includes(inputVal)) {
      // Show match Notes
      element.style.display = 'block';
      // console.log(eachNote.getElementByTagName('p')[0].innerText);
    } else {
      // Hidden(Block) Notes that are not matched from the notes
      element.style.display = 'none';
    }
  })
}
let srchBtn = document.getElementById('srchBtn');
srchBtn.addEventListener('click', srchnote);


// Actice Search Button
// This is ending here :)