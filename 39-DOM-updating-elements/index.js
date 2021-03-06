// OPEN index.html IN YOUR BROWSER
// OPEN DEV TOOLS, OPEN THE CONSOLE TAB
// CALL YOUR FUNCTIONS IN THE CONSOLE TO
// TEST YOUR CHANGES

/**
 * Exercise 1
 * create a function {setTitle} which takes a string as an argument
 * and displays it in the h1
 */

function setTitle(string) {
  let text = string;
  const h1 = document.querySelector("h1");
  h1.innerText = text;
}
console.log(setTitle());
// appendToTitle();

/**
 * Exercise 2
 * create a function {appendToTitle} which takes a string as an argument
 * and appends it to existing h1 text
 */

function appendToTitle(string) {
  let text = string;
  const h1 = document.querySelector("h1");
  h1.innerText += text;
}

/**
 * Exercise 3
 * create a function {prependToTitle} which takes a string as an argument
 * and prepends it to existing h1 element text
 */

/**
 * Exercise 4
 * create a function {setInnerHTMLForDiv} which takes a tag name and text as
 * arguments and uses innerHTML to create an element inside the div, and the
 * text is displayed inside that element. The element should the tag name
 * passed into the function
 */

function prependToTitle(string) {
  let text = string;
  const h1 = document.querySelector("h1");
  h1.innerText = text + h1.innerText;
}

/**
 * Exercise 4
 * create a function {setInnerHTMLForDiv} which takes a tag name and text as
 * arguments and
 * uses
 * innerHTML to create an element inside the div, and the
 * text is displayed inside that element.
 *
 * The element should the tag name
 * passed into the function
 */

function setInnerHTMLForDiv(tagName, text) {
  const div = document.querySelector("div");
  div.innerHTML = `<${tagName}>${text}`;
}

/**
 * Exercise 5
 * create a function {addPtoDivWithText} which takes a string as an argument
 * and uses innerHTML to add a p tag containing the text into the div
 */

function pushPtoDivWithText(string) {
  const div = document.querySelector("div");
  div.innerHTML = div.innerHTML + `<p>${string}</p>`;
}

/**
 * Exercise 6
 *
 * create a function {setSrcToImage} which takes a url and image description
 * as arguments and set it as a src and alt attributes values
 * for existing img
 */

function setSrcToImage(url, imageDescription) {
  const img = document.querySelector("img");
  img.src = url;
  img.alt = imageDescription;
}

/**
 * Exercise 7
 *
 * create a function {setCodersInHoodsLink} which takes 2 arguments, a URL
 * and some text
 *
 * Find the a tag in the page, set the href to the URL and display the text
 *
 * Also add an attribute that opens your page in a new tab
 */

function setCodersInHoodsLink(url, text) {
  const a = document.querySelector("a");
  a.href = url;
  a.innerText = text;
  a.target = "_blank";
}

/**
 * Exercise 8
 *
 * create a function {disableResetBtn} which will disable button
 * with class "reset"
 */

function disableResetBtn() {
  const button = document.querySelector(".reset");
  button.disabled = true;
}

/**
 * Exercise 9
 *
 * create a function {disableBtns} which takes class name as an argument
 * and disable all buttons with this class name
 */

function disableBtns(classN) {
  var buttons = document.getElementsByClassName(`${classN}`);
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
}

/**
 * Exercise 10
 *
 * create a function {addClassToLi} which adds the class
 * "list_item_$" (where $ is a position in a list) to each li
 * that is inside the ul with the class "list"
 *
 * NOTE: We've added some CSS so when your classes are added,
 * you will see a difference
 */

function addClassToLi() {
  const list = document.querySelectorAll("li");
  for (var i = 0; i < list.length; i++) {
    list[i].classList.add(`list_item_${i}`);
  }
}
/**
 * Exercise 11
 *
 *  create a function {removeListItemClass} which removes the class
 * "list_item" from all li elements with this class
 */

function removeListItemClass() {
  const list = document.querySelectorAll(".list_item");
  for (var i = 0; i < list.length; i++) {
    list[i].classList.remove("list_item");
  }
}

/**
 * Exercise 12
 *
 *  create a function {addId} which takes 2 arguments: an id and
 * a CSS selector. Use to selector to find an element, then add
 * the id to the element
 */

function addId(iD, selector) {
  const list = document.querySelectorAll(selector);
  for (var i = 0; i < list.length; i++) {
    list[i].id = iD;
  }
}

/**
 * Exercise 13
 *
 *  create a function {setStyles} which takes 3 arguments
 * 1 - a CSS property name,
 * 2 - property value,
 * 3 - a CSS selector
 *
 * use the selector to find all the elements which match, then
 * set the CSS property to the value
 */

function setStyles(cssProp, propValue, selector) {
  const listItems = document.querySelectorAll(selector);
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].setAttribute("style", `${cssProp}: ${propValue}`);
  }
}
