console.log('This is linked with project 6 html file');

// Condidate Information as a object in the array
let CandidateData = [ 
{
Name: "Hemant soni", 
age: 18,
language: "JavaScript",
role: "Web Developer",
framework: "React Js",
image: "https://randomuser.me/api/portraits/men/75.jpg"
},

{
Name: "Ajay Soni", 
age: 20,
language: "Java",
role: "App Developer",
framework: "React Js",
image: "https://randomuser.me/api/portraits/men/78.jpg"
},

{
Name: "Suraj Chippa", 
age: 19,
language: "Node.js",
role: "Web App Developer",
framework: "React Js",
image: "https://randomuser.me/api/portraits/men/79.jpg"
},

{
Name: "Jagdish Yadav", 
age: 19,
language: "Rust",
role: "Software Developer",
framework: "Vue.Js",
image: "https://randomuser.me/api/portraits/men/80.jpg"
},

{
Name: "Abhay Jangid", 
age: 20,
language: "Go",
role: "Google Developer",
framework: "web2py",
image: "https://randomuser.me/api/portraits/men/81.jpg"
},
];


// Iterator To change the Information about the Candidate
function candidateIterator(data){
    let Iterator = 0; //To Starting Iteration from the begining 
    return {next:function(){
        return Iterator < data.length ? {value: data[Iterator++], done: false}: {done: true};
    }}
}

// Getting item from iteration function
let Candidate = candidateIterator(CandidateData);

cvIteration();
// Java Script to change the Candidate || Itration

let next = document.getElementById('next');

next.addEventListener("click", cvIteration);
function cvIteration(){
   let currentCandidate = Candidate.next().value;
//    console.log(currentCandidate);

let Imgsection = document.getElementById('Imgsection');
let information = document.getElementById('information'); 
if (currentCandidate != undefined) {
Imgsection.innerHTML = `<img src="${currentCandidate.image}" class="rounded mx-auto d-block" alt="Image Not Available">` 
information.innerHTML = `
<ul class="list-group list-group-flush">
<li class="list-group-item">Name: ${currentCandidate.Name}</li>
<li class="list-group-item">Age: ${currentCandidate.age}</li>
<li class="list-group-item">Language: ${currentCandidate.language}</li>
<li class="list-group-item">Role: ${currentCandidate.role}</li>
<li class="list-group-item">Framework: ${currentCandidate.framework}</li>
</ul>
`;   
}
else{
    window.alert("All Applications has Ended Here");
    window.location.reload();
}
}

// Project Has ended Here