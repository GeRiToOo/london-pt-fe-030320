// OPEN index.html IN YOUR BROWSER
// CALL YOUR FUNCTIONS IN DEV TOOLS TO SEE CHANGES

/**
 * Exercise 1
 *
 * create a function {createDOMElement} which takes a tag name
 * as an argument and returns a new DOM element.
 *
 * NOTE: we will use this function for other exercises.
 */
function createDOMElement(tagName) {
  let newDomEl = document.createElement(tagName);
  return newDomEl;
}
/**
 * Exercise 2
 *
 * create a function {addPTag} which takes some text as an argument,
 * create a "p" tag which displays the text and appends it to
 * the body of the document
 */

function addPTag(text) {
  const p = document.querySelector("p");
  p.innerText = `${text}`;
}

/**
 * Exercise 3
 *
 * create a function {addElementWithClass} which takes tag name,
 * text and class name as arguments.
 *  It should create an element
 * which displays the text and has the class and appends
 * the element to the body
 */

function addElementWithClass(tagName, text, className) {
  const bodY = document.querySelector("body");
  let newDomEl = document.createElement(tagName);
  newDomEl.className = className;
  newDomEl.innerText = text;
  bodY.appendChild(newDomEl);
}
/**
 * Exercise 4
 *
 * create a function {addElementWithMultipleClasses} which takes tag name,
 * text and an array of classes. Create an element which displays the
 * text, has the array of classes and append it to the body
 */
function addElementWithMultipleClasses(tagName, text, array) {
  const bodY = document.querySelector("body");
  let newDomEl = document.createElement(tagName);
  newDomEl.innerText = text;
  bodY.appendChild(newDomEl);
  for (let i = 0; i < array.length; i++) {
    newDomEl.classList.add(array[i]);
  }
}

/**
 * Exercise 5
 *
 * create a function {buildAList} which takes a few arguments
 * 1 - list type ("ul" or "ol")
 * 2 - a class for the list element
 * 3 - a number of li elements that need to be created
 *
 * Each li should have the text "Item $" (where $ is it's position)
 * Add the list element to the body
 */

function buildAList(listType, listClass, liNum) {
  const bodY = document.querySelector("body");

  let type = document.createElement(listType);
  type.className = listClass;

  bodY.appendChild(type);

  for (let i = 0; i < liNum; i++) {
    let li = document.createElement("li");
    liNumber = liNum[i] + 1;
    li.innerText = `Item_${liNumber}`;
    type.appendChild(li);
  }
}

/**
 * Exercise 6
 * !!! to test this function in your browser, first run {buildAList} !!!
 *
 * create a function {prependLiToList} which takes some text and
 * a class as arguments.
 *
 * Create a new li element which displays the text and has the class.
 *
 * Add that li to the list in your page, but the new li must be the
 * FIRST item in the list.
 *
 */
function prependLiToList(text, classArg) {
  const liContainer = document.querySelector("ul");
  let newLi = document.createElement("li");
  newLi.innerText = text;
  newLi.className = classArg;
  liContainer.insertBefore(newLi, liContainer.firstElementChild);
}

/**
 * Exercise 7
 * !!! to test this function in your browser, first run {buildAList} !!!
 *
 * create a function {pushToSelectedPosition} which takes some text,
 * a class and a position (index).
 *
 * Create an li with the text and class.
 *
 * Add the li into the list at the position passed to this function.
 *
 */
function pushToSelectedPosition(text, classArg, position) {
  const liContainer = document.querySelector("ul");
  let newLi = document.createElement("li");
  newLi.innerText = text;
  newLi.className = classArg;

  liContainer.insertBefore(newLi, liContainer.children[position]);
}

/**
 * Exercise 8
 *
 * create a function {deleteChildrenElements} which takes
 * a parent selector and an element selector
 *
 * Find the parent element, then remove any ancestors of that
 * element which match the element selector
 *
 */

function deleteSelectedElements(parentSelector, childSelector) {
  let parent = document.getElementsByClassName(`${parentSelector}`);
  let children = document.querySelectorAll(`${childSelector}`);

  children.forEach(child => {
    child.parentNode.removeChild(child);
  });
}
