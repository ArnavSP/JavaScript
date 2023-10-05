// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables

-------------------------------------------------- */

document.addEventListener('DOMContentLoaded', function() {
  
// Constants for main button query selectors
const noun1Button = document.getElementById('noun1');
const verbButton = document.getElementById('verb');
const adjectiveButton = document.getElementById('adjective');
const noun2Button = document.getElementById('noun2');
const settingButton = document.getElementById('setting');

// Constants for p tag to display query selectors
const choosenNoun1 = document.getElementById('choosenNoun1');
const choosenVerb = document.getElementById('choosenVerb');
const choosenAdjective = document.getElementById('choosenAdjective');
const choosenNoun2 = document.getElementById('choosenNoun2');
const choosenSetting = document.getElementById('choosenSetting');

// Constants for final buttons and p tags
const playbackButton = document.getElementById('playback');
const randomButton = document.getElementById('random');
const storyParagraph = document.getElementById('story');

// Variables for pre-defined arrays
const nouns1 = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant ", "The cat"];
const verbs2 = [" sat on", " ate", " danced with", " saw", " doesn't like", " kissed"];
const adjectives3 = [" a funny", " a scary", " a goofy", " a slimy", " a barking", " a fat"];
const nouns4 = [" goat", " monkey", " fish", " cow", " frog", " bug", " worm"];
const places5 = [" on the moon", " on the chair", " in my spaghetti", " in my soup", " on the grass", " in my shoes"];

// Variables for count to grab array elements
let noun1Count = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;

/* Functions
-------------------------------------------------- */
function getNextArrayElement(arr, count) {
  // Get the next element from the array based on the count
  const element = arr[count];
  
  // Increment the count to get the next element next time
  count++;
  
  // If the count exceeds the array length, reset it to 0
  if (count >= arr.length) {
    count = 0;
  }
  
  return [element, count];
}

function noun1_on_click() {
  const [element, count] = getNextArrayElement(nouns1, noun1Count);
  choosenNoun1.textContent = element;
  noun1Count = count;
}

function verb_on_click() {
  const [element, count] = getNextArrayElement(verbs2, verbCount);
  choosenVerb.textContent = element;
  verbCount = count;
}

function adjective_on_click() {
  const [element, count] = getNextArrayElement(adjectives3, adjectiveCount);
  choosenAdjective.textContent = element;
  adjectiveCount = count;
}

function noun2_on_click() {
  const [element, count] = getNextArrayElement(nouns4, noun2Count);
  choosenNoun2.textContent = element;
  noun2Count = count;
}

function setting_on_click() {
  const [element, count] = getNextArrayElement(places5, settingCount);
  choosenSetting.textContent = element;
  settingCount = count;
}

function concatenateStory() {
  return (
    choosenNoun1.textContent +
    choosenVerb.textContent +
    choosenAdjective.textContent +
    choosenNoun2.textContent +
    choosenSetting.textContent
  );
}

function playback_on_click() {
  const story = concatenateStory();
  storyParagraph.textContent = story;
}

function random_on_click() {
  noun1_on_click();
  verb_on_click();
  adjective_on_click();
  noun2_on_click();
  setting_on_click();
  playback_on_click();
}

/* Event Listeners
-------------------------------------------------- */
noun1Button.addEventListener('click', noun1_on_click);
verbButton.addEventListener('click', verb_on_click);
adjectiveButton.addEventListener('click', adjective_on_click);
noun2Button.addEventListener('click', noun2_on_click);
settingButton.addEventListener('click', setting_on_click);
playbackButton.addEventListener('click', playback_on_click);
randomButton.addEventListener('click', random_on_click);

});
