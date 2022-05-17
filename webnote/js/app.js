showNotes();
//if yours click on the add button
let  addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', function(e){
    let addtxt = document.getElementById('addtxt');
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addtxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addtxt.value = "";
    console.log(notesObj);
    showNotes();
})

function showNotes(){
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index){
        html += `
        <div class="notecard main-container" my-2 mx-2 style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title fw-bold">Note ${index+1}</h5>
                <p class="card-text">${element}</p>
                <button id = ${index} onclick ="deletenotes(this.id)" class="btn btn-primary bg-warning text-black">Delete</button>
            </div>
        </div>`;
    });
    let noteselm = document.getElementById('notes');
    if(notesObj.length != 0){
        noteselm.innerHTML = html;
    }
    else{
        noteselm.innerHTML = 'Please Add Notes !'
        noteselm.style.fontWeight="700";
        
    }
}

function deletenotes(index){
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}


let search = document.getElementById('searchtxt');
search.addEventListener('input', function(){
    let inputval = search.value.toLowerCase();
    let notecards = document.getElementsByClassName('notecard');
    Array.from(notecards).forEach(function(element){
        let cardtxt = element.getElementsByTagName('p')[0].innerText;
        if(cardtxt.includes(inputval)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
})


// Extra designings
let heading = document.getElementById('logo-heading');
heading.addEventListener('mousemove', function(e){
    heading.style.color = `rgb(${e.offsetX}, ${e.offsetY}, ${e.offsetY})`;
})

