const inputArray = [];
let completedCount = 0;
const btn = document.querySelector("button");
const list = document.querySelector("ul");
const label = document.querySelector("p");
const entry = document.querySelector("small");
btn.addEventListener("click", function () {
  const input = document.querySelector("input");
  const text = input.value; 
  inputArray.push(text);
  if (text.length == 0) {
    entry.innerText = "Du måste skriva något";
    return;
  } else {
    input.value= "";
  }

  var i;
  var store = "";
  for (i = 0; i < inputArray.length; i++) {
    store = store + inputArray[i] + "</br>";
    console.log(store);
  }
  var li1 = document.createElement("li");
  list.appendChild(li1);
  const itemLabel = document.createElement("span");
  itemLabel.innerText = text;
  li1.appendChild(itemLabel);

  itemLabel.addEventListener("click", function () {
    if (li1.getAttribute("class") == "completed") {
      li1.setAttribute("class", "");
      completedCount--;

    }
    else {
      li1.setAttribute("class", "completed");
      completedCount++;
    }
    label.innerText = `${completedCount} completed`;

  });
  const trashcan = document.createElement("span");
  trashcan.innerHTML = "&#x1F5D1";
  trashcan.setAttribute("class", "trashcan");
  itemLabel.appendChild(trashcan);

  trashcan.addEventListener("click", function () {
    li1.remove();

  });
 input.value= "";
});
