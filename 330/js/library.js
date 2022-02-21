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

export default {
  writeById,
  writeByClass,
  createLink,
  getFilename,
  urlExists,
  isElement,
  isClass,
  getBase,
  cleanInput,
};
