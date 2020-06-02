const URL = "https://cat-fact.herokuapp.com/facts";

const button = document.querySelector("button");
const result = document.querySelector(".result");
const input = document.querySelector("input");
// ================================

// URL: https://cat-fact.herokuapp.com/facts

// BEFORE YOU START:
// run `npm install -g serve`
// then run `serve` in this directory

/**
 * Exercise 1
 *
 * create a function {fetchData} which takes
 * a URL as an argument and sends a GET request.
 * When you get a response, return an array of facts.
 */

const fetchData = async (url) => {
  return await fetch(url).then((response) => response.json());
};

const threeRandom = async () => {
  const catsData = await fetchData(`${URL}`).then((response) => {
    return response.all;
  });
  //It is Array catsData
  console.log(Array.isArray(catsData));
  for (let i = 0; i < 3; i++) {
    let number = Math.floor(Math.random() * Math.floor(catsData.length));
    let li = document.createElement("li");
    result.appendChild(li);
    let pText = document.createElement("p");
    pText.className = "fact";
    pText.innerText = catsData[number].text;
    li.appendChild(pText);
    let pName = document.createElement("p");
    pName.className = "author";
    pName.innerText = `${catsData[number].user.name.first} ${catsData[number].user.name.last}`;
    li.appendChild(pName);
  }
};

button.addEventListener("click", () => {
  result.innerHTML = "";
  threeRandom();
});

/**
 * Description of the application:
 *
 * As a user I should be able to:
 * 1. click on a button "Get random facts"
 * 2. view 3 random facts in ".result" element
 */
