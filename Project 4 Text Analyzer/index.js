let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", analyzeText);
function analyzeText() {
  // To Calculate the Characters
  let addText = document.getElementById("addText");
  let textLength;
  let textValue = addText.value;

  if (textValue == "") {
    let alert = document.getElementById("alert");
    alert.innerHTML = `<div class="showmsg">
                <p>Please! Paste or Write Something</p>
            </div>`;
    setTimeout(() => {
      alert.innerHTML = "";
    }, 1500);
    // setTimeout(func1(), 2444); //This is just for understanding;
    textLength = textValue.length;
  } else {
    textLength = textValue.length;

    // To Show the Total Character on the display
    let totalChars = document.getElementById("totalChars");
    totalChars.innerText = textLength;

    // To Calculate the Words
    let allWordsLength;
    let allWords = textValue.split(" ");
    allWordsLength = allWords.length;

    // To Show the length of All Words
    let totalWords = document.getElementById("totalWords");
    totalWords.innerText = allWordsLength;

    // To Calculate the WhiteSpaces
    let allWhiteSpaces = allWords.length - 1;

    // To Show the Length of WhiteSpaces on the display
    let totalSpaces = document.getElementById("totalSpaces");
    totalSpaces.innerText = allWhiteSpaces;
    textValue.innerText = "";
  }
};
let resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', ()=>{
let addText = document.getElementById('addText');
addText.value = "";
let totalChars = document.getElementById("totalChars");
    totalChars.innerText = 0;
    let totalWords = document.getElementById("totalWords");
    totalWords.innerText = 0;
    let totalSpaces = document.getElementById("totalSpaces");
    totalSpaces.innerText = 0;
});
