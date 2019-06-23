// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

// Functions that change the color of the keys
const keyPlay = function(event) {
  event.target.style.backgroundColor = 'green';
};
const keyReturn = function(event) {
  event.target.style.backgroundColor = '';
}

// Function with event handler properties
let eventAssignment = function(note) {
  note.onmousedown = keyPlay;
  note.onmouseup = keyReturn;
};

// Loop that runs the array elements through the function
notes.forEach(eventAssignment);


// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Nnonymous event handler property and function for the first progress button
nextOne.onclick = function(){
  nextTwo.hidden = false;
  nextOne.hidden = true;
  document.getElementById('letter-note-five').textContent = 'D';
  document.getElementById('letter-note-six').textContent = 'C';
};

// Anonymous event handler property and function for the second progress button
nextTwo.onclick = function(){
  nextThree.hidden = false;
  nextTwo.hidden = true;
  document.getElementById('word-five').textContent = 'DEAR';
  document.getElementById('word-six') = 'FRI-';
  lastLyric.style.display = 'inline-block';
  document.getElementById('letter-note-three').textContent = 'G';
  document.getElementById('letter-note-four').textContent = 'E';
  document.getElementById('letter-note-five').textContent = 'C';
  document.getElementById('letter-note-six').textContent = 'B';
};

// Anonymous event handler property and function for the third progress button
nextThree.onlickc = function(){
  startOver.hidden = false;
  nextThree.hidden = true;
  document.getElementById('word-one').textContent = 'HAP-';
  document.getElementById('word-two').textContent = 'PY';
  document.getElementById('word-three').textContent = 'BIRTH';
  document.getElementById('word-four').textContent = 'DAY';
  document.getElementById('word-five').textContent = 'TO';
  document.getElementById('word-six').textContent = 'YOU!';
  document.getElementById('letter-note-one').textContent = 'F';
  document.getElementById('letter-note-two').textContent = 'F';
  document.getElementById('letter-note-three').textContent = 'E';
  document.getElementById('letter-note-four').textContent = 'C';
  document.getElementById('letter-note-five').textContent = 'D';
  document.getElementById('letter-note-six').textContent = 'C';
  lastLyric.style.display = 'none';
};

// Event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
   document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}