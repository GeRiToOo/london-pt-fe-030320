const productsContainer = document.querySelector("#products");
let remaining = document
  .querySelector("#remaining > span")
  .innerText.slice(1, 6);

let span = document.querySelector("#remaining span");

// let budget = 50;
//   Number(remaining).toFixed(2);
// console.log(budget);

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
    option.id = i;
    select.appendChild(option);
  }
  selectOption(i);
}

const objectQuantity = {
  n0: 0,
  n1: 0,
  n2: 0,
  n3: 0
};
console.log(objectQuantity);
// --------- function select option ----------

function selectOption(i) {
  let divProduct = document.querySelector(`#n${i}`);
  let selectProduct = divProduct.querySelector("select");
  let priceProduct = divProduct.querySelector("p");

  let price = priceProduct.value;

  selectProduct.addEventListener("change", event => {
    let quantity = selectProduct.value;
    objectQuantity[`n${i}`] = quantity; //push into the object every change
    let div1 = objectQuantity.n0 * price;
    let div2 = objectQuantity.n1 * price;
    let div3 = objectQuantity.n2 * price;
    let div4 = objectQuantity.n3 * price;
    let budget = 50;
    let result = div1 + div2 + div3 + div4;
    console.log(result);
    budget = budget - result;
    budget = budget.toFixed(2);

    if (budget > 0) {
      span.innerHTML = `£${budget}`;
    } else if (budget < 0) {
      errorMessage();
    }
  });
}

// ---------- Error message function ----------
function errorMessage() {
  const cart = document.querySelector(".container");
  const errorM = document.createElement("div");
  errorM.innerText = "Not enough money left for that!";
  errorM.className = "error";
  cart.appendChild(errorM);
  setTimeout(function() {
    cart.removeChild(errorM);
  }, 3000);
}
