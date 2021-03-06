// 1. Create DOM manipulation helper functions in utilities.js
//Two here for starters should be good as well...may add more later
// do a querySelector lookup @param {string} selector The selector passed to querySelector

// @return {element} The matching element or null if not found /
const qs = selector => {
    //console.log('(from qs) document.querySelector(selector): ' + document.querySelector(selector));
    return document.querySelector(selector);
}

/*
add a touchend event listener to an element for mobile with a click event fallback for desktops @param {string} elementSelector The selector for the element to attach the listener to
* @param {function} callback The callback function to run
*/

function onTouch(elSelector, callback) {
    let event = 'touchend';
    //let event = 'click';
    const el = qs(elSelector);
    //console.log(elSelector);
    //console.log(el);
    if (el.addEventListener) {
        el.addEventListener(event, callback, false);
    } else if (el.attachEvent) {
        el.attachEvent(event, callback);
    }
    // prevent page from reloading when form is submitted
    //event.preventDefault(); 
}

/*

document.getElementById("link").addEventListener('click', function(e) {
   e.preventDefault(); // Cancel the native event
   e.stopPropagation();// Don't bubble/capture the event any further
});

*/

function createLMNT(LMNT, LMNTtype, LMNTid, LMNTtext, LMNTclass) {
    let lmnt = document.createElement(LMNT);
    lmnt.setAttribute('type', LMNTtype);
    lmnt.setAttribute('id', LMNTid);
    lmnt.innerText = LMNTtext;
    lmnt.setAttribute('class', LMNTclass);
    return lmnt;
}
export { qs, onTouch, createLMNT };