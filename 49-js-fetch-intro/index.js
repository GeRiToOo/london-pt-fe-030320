const form = document.querySelector("form");
const result = document.querySelector(".result");
const input = document.querySelector("input");
// ================================

// BEFORE YOU START:
// run `npm install -g serve`
// then run `serve ./` to serve your index page

/**
 * Exercise 1
 *
 * create a function {getResponse} which takes
 * a URL as an argument and makes a GET request.
 * If the response {status} code is successful,
 * call a function which will render "Valid link! {Link}"
 * in {result} element, otherwise render
 * `Request failed with status code: {errorCode}`
 */
form.addEventListener("submit", (e) => {
  let url = input.value;
  result.innerHTML = "";
  console.log(url);
  getResponse(url);
});
input.addEventListener(`focus`, (event) => {
  result.innerHTML = "";
  input.value = "";
});

const getResponse = async (url) => {
  fetch(`${url}`)
    .then((response) => {
      if (response.ok) {
        result.className = "result success";
        let a = document.createElement(`a`);
        a.target = "_blank";
        a.href = url;
        a.innerText = "Link!";

        result.innerText = `Valid link!`;
        result.appendChild(a);
      } else {
        result.className = "result error";
        result.innerHTML = `Request failed with status code: ${response.status}`;
      }
    })
    .catch((error) => {
      console.log(error);
    });
};



/**
 * Description of the application:
 *
 * As a user I should be able to:
 * 1. provide URL in input and submit my request
 * 2. if provided URL is a valid API URL, then I should see
 * a message with a link.
 * 3. When I click on a link, it should be opened in a new tab
 * 4. if provided URL is invalid API URL, then I should see
 * an error message in {result} with status code.
 * 5. When I focus on input, it should clear my input and hide
 * {result}
 */
