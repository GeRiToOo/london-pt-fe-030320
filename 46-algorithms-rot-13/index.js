let text = document.querySelector("textarea");
let encrypt = document.querySelector("#encrypt");
let decrypt = document.querySelector("#decrypt");
let result = document.querySelector(".result");

function rot13(string) {
  let input = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let output = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";
  let index = x => input.indexOf(x);
  let translate = x => (index(x) > -1 ? output[index(x)] : x);
  return string
    .split("")
    .map(translate)
    .join("");
}

function decryptRot13(string) {
  let input = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let output = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";
  let index = x => output.indexOf(x);
  let translate = x => (index(x) > -1 ? input[index(x)] : x);
  return string
    .split("")
    .map(translate)
    .join("");
}

encrypt.addEventListener("click", event => {
  let textResult = rot13(text.value);
  result.innerHTML = textResult;
});

decrypt.addEventListener("click", event => {
  let textResult = decryptRot13(text.value);
  result.innerHTML = textResult;
});
