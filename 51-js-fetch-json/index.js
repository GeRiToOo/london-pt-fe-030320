const URL = "https://cat-fact.herokuapp.com";

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

const test = async () => {
  const catsData = await fetchData(`${URL}/facts`);

  for (let i = 0; i < 3; i++) {
    let number = Math.floor(Math.random() * Math.floor(catsData.all.length));
    let li = document.createElement("li");
    result.appendChild(li);
    let pText = document.createElement("p");
    pText.className = "fact";
    pText.innerText = catsData.all[number].text;
    li.appendChild(pText);
    let pName = document.createElement("p");
    pName.className = "author";
    pName.innerText = `${catsData.all[number].user.name.first} ${catsData.all[number].user.name.last}`;
    li.appendChild(pName);
  }
};

button.addEventListener("click", () => {
  result.innerHTML = "";
  test();
});

/**
 * Description of the application:
 *
 * As a user I should be able to:
 * 1. click on a button "Get random facts"
 * 2. view 3 random facts in ".result" element
 */
