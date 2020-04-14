const productsContainer = document.querySelector("#products");
let remaining = document.querySelector("#remaining");
let span = remaining.querySelector("span");
let budget = 50;
let newBudget;

// products.js GET and SET
myProducts = JSON.stringify(products);
const productsObject = JSON.parse(myProducts);

for (let i = 0; i < productsObject.length; i++) {
  const div = document.createElement("div");
  div.id = "n" + i;
  productsContainer.appendChild(div);

  const img = document.createElement("img");
  div.appendChild(img);
  img.src = productsObject[i].img;

  const h3 = document.createElement("h3");
  div.appendChild(h3);
  h3.innerText = productsObject[i].name;

  const p = document.createElement("p");
  div.appendChild(p);
  p.innerText = productsObject[i].price;
  p.value = productsObject[i].price;

  const select = document.createElement("select");

  div.appendChild(select);

  // append options as many as are in quantity
  let number = productsObject[i].max_quantity;
  for (let i = 0; i <= number; i++) {
    const option = document.createElement("option");
    option.innerText = i;
    option.value = i;
    select.appendChild(option);
  }
  selectOption(i);
}

// --------- function select option ----------

function selectOption(i) {
  let divProduct = document.querySelector(`#n${i}`);
  let selectProduct = divProduct.querySelector("select");
  let priceProduct = divProduct.querySelector("p");
  let constant = productsObject[i].max_quantity;
  console.log("constant " + constant);
  let price = priceProduct.value;

  selectProduct.addEventListener("change", event => {
    let quantity = selectProduct.value;
    event.preventDefault();

    budget = budget - price * quantity;
    budget = budget.toFixed(2);

    if (budget > 0) {
      span.innerHTML = `£${budget}`;

      // if the budget goes under 0
    } else if (budget < 0) {
      let number = price * quantity;
      budget = Number(budget) + Number(number); // return what was decreased
      errorMessage();
    }
    // console.log(budget);
  });
  //   console.log(budget);
  return 0;
}

// ---------- Error message function ----------
function errorMessage() {
  const main = document.querySelector("main");
  const errorM = document.createElement("div");
  errorM.innerText = "Not enough money left for that!";
  errorM.innerClass = "error";
  main.appendChild(errorM);
  setTimeout(function() {
    main.removeChild(errorM);
  }, 3000);
}

// let difference;
// let selected = selectProduct.options[selectProduct.selectedIndex];

// let backToBudget;

// difference = selected - quantity;
// console.log("selected " + selected);
// console.log("quant " + quantity);
// // backToBudget = difference * price;
// console.log("difference " + difference);
// // console.log("back " + backToBudget);
