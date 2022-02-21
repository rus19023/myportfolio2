function cleanInput(input) {
  console.log(input);
  // todo: strip out and/or replace and/or escape any offensive parts of the input
  // trim and escape the input
  let cleaned = input.trim().replace(/\/[^\/]*$/, "/");
  console.log(cleaned);
}

function writeById(output, input) {
  qs(`#${output}`).innerHTML = input;
}

function writeByClass(output, input) {
  qs(`.${output}`).innerHTML = input;
}

const createLink = (url, text) => {
  return `<a href="${url}">${text}</a>`;
};

function getFilename() {
  var path = window.location.pathname;
  var page = path.split("/").pop();
  return page;
}

function urlExists(url) {
  if (url.includes(getBase())) {
    var http = new XMLHttpRequest();
    http.open("HEAD", url, false);
    http.send();
    return http.status != 404;
  }
}

// @return {element} The matching element or null if not found /
const qs = (selector) => {
  return document.querySelector(selector);
};

function isElement(element) {
  // check if id exists
  const myId = qs(`#${element}`);
  if (typeof myId != "undefined" && myId != null) {
    return myId.nodeType === 1;
  }
}

function isClass(element) {
  // check if class exists
  const myClass = qs(`.${element}`);
  if (typeof myClass != "undefined" && myClass != null) {
    return myClass.nodeType === 1;
  }
}

function getBase() {
  //return window.location.href.replace(/\/[^\/]*$/, '/');
  var href = location.href; //returns the entire url
  var host = location.hostname; //returns just the hostname of the url
  return location.href;
}

function getWeeknum(filenamee) {
  let weekno;
  if (filenamee.substr(0, 4) === "week") {
    weekno = filenamee.substr(4, 2);
  }
  return weekno;
}

function weeknumber() {
  // calculate which week we are on
  // set first date of term
  let termdate = new Date(2022, 0, 1, 0, 59, 0);
  // set today's date
  let today = new Date();
  // calculate number of milliseconds per week
  let secondsPerWeek = 1000 * 60 * 60 * 24 * 7;
  // calculate difference between today and term date in weeks
  let seconds = today.getTime() - termdate.getTime();
  // add 1 to weeks to account for rounding down
  let weeknumber = Math.floor(seconds / secondsPerWeek) + 1;
  return weeknumber;
}

if (isElement("filename")) {
  document.getElementById("filename").innerText = getWeeknum(page);
}

// Week 01

function loadStory() {
  let storyName = document.getElementById("name_input").value;
  let storyHTML = localStorage.getItem(storyName);
  document.getElementById("story_editor").value = storyHTML;
}

function saveStory() {
  let storyName = document.getElementById("name_input").value;
  let storyHTML = document.getElementById("story_editor").value;
  localStorage.setItem(storyName, storyHTML);
}

function showStory() {
  let storyHTML = document.getElementById("story_editor").value;
  document.getElementById("story_show").innerText = storyHTML;
}

function reverseNumber() {
  var number = document.getElementById("number_input").value;
  // console.log(`number: ${number}`);
  let rnumber = "Number reversed: " + number.split("").reverse().join("");
  document.getElementById("reverse_output").innerText = rnumber;
}

// Week 02

function loopingTriangle() {
  var base = "#";
  var triangle = "#";
  for (let i = 0; i < 7; i++) {
    base += "#";
    triangle += "\n" + base;
  }
  document.getElementById("triangle_output").innerText = base;
}
