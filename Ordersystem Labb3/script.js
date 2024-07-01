'use strict'

/* Visa alla pizzor */
const pizza1List = document.querySelector(".pizza1");
menu["Pizzor klass 1"].forEach(pizza => {
  const listItem = document.createElement("li");
  const buyButton = document.createElement("button"); // Create the buy button element
  buyButton.classList.add('btn-success');
  buyButton.textContent = "Köp"; // Set the text content of the buy button
  listItem.textContent = `${pizza.name} - ${pizza.contents} - ${pizza.price} kr `;
  listItem.appendChild(buyButton); // Append the buy button to the list item
  pizza1List.appendChild(listItem);
});


const pizza2List = document.querySelector(".pizza2");
menu["Pizzor klass 2"].forEach(pizza => {
  const listItem = document.createElement("li");
  const buyButton = document.createElement("button"); // Create the buy button element
  buyButton.textContent = "Köp"; // Set the text content of the buy button
  buyButton.classList.add('btn-success');
  listItem.textContent = `${pizza.name} - ${pizza.contents} - ${pizza.price} kr `;
  listItem.appendChild(buyButton); // Append the buy button to the list item
  pizza2List.appendChild(listItem);
});

const pizza3List = document.querySelector(".pizza3");
menu["Pizzor klass 3"].forEach(pizza => {
  const listItem = document.createElement("li");
  const buyButton = document.createElement("button"); // Create the buy button element
  buyButton.classList.add('btn-success');
  buyButton.textContent = "Köp"; // Set the text content of the buy button
  listItem.textContent = `${pizza.name} - ${pizza.contents} - ${pizza.price} kr `;
  listItem.appendChild(buyButton); // Append the buy button to the list item
  pizza3List.appendChild(listItem);
});

const pizzasos = document.querySelector(".sos");
menu["Såser"].forEach(pizza => {
  const listItem = document.createElement("li");
  const buyButton = document.createElement("button"); // Create the buy button element
  buyButton.classList.add('btn-success');
  buyButton.textContent = "Köp"; // Set the text content of the buy button
  listItem.textContent = `${pizza.name} - ${pizza.price} kr `;
  listItem.appendChild(buyButton); // Append the buy button to the list item
  pizzasos.appendChild(listItem);
});

const pizzadryck = document.querySelector(".dryck");
menu["Dryck"].forEach(pizza => {
  const listItem = document.createElement("li");
  const buyButton = document.createElement("button"); // Create the buy button element
  buyButton.classList.add('btn-success');
  buyButton.textContent = "Köp"; // Set the text content of the buy button
  listItem.textContent = `${pizza.name} - ${pizza.price} kr `;
  listItem.appendChild(buyButton); // Append the buy button to the list item
  pizzadryck.appendChild(listItem);
});



/* Välj bord */
// Get the necessary elements
const bordList = document.querySelector('.bord');


// Function to handle the click event on the bord list
function handleBordClick(event) {
  const clickedElement = event.target;
  const clickedItem = clickedElement.textContent;

  // Create a new list item
  const newItem = document.createElement('li');
  newItem.textContent = clickedItem;

  // Append the new item to the kundOrderList
  document.querySelector('.kund-order').appendChild(newItem);
}

// Add event listener to the bord list
bordList.addEventListener('click', handleBordClick);






/* lägga order pizza */

var liElements = document.querySelectorAll('.menyPizza li');

function handleClick(e) {
  var clickedButton = e.target;
  var liElement = clickedButton.closest('li');
  var liContent = liElement.textContent.trim();
  var liContentWithoutButton = liContent.substring(0, liContent.length - 4); // Exclude the last 4 characters
  var addText = prompt('Notering: ');

  if (addText !== null) {
    var listSumma = document.createElement('li');
    listSumma.textContent = liContentWithoutButton + "  " + addText;
    document.querySelector(".kund-order").appendChild(listSumma);
  }
}

liElements.forEach(function(li) {
  var buyButton = li.querySelector('button');
  buyButton.addEventListener('click', handleClick);
});






/* Tar bort från beställning */

var ulElement = document.querySelector('.kund-order');

function removeFood(e) {
  var clickedElement = e.target;
  var acca = confirm("Vill du ta bort produkten: " + clickedElement.textContent);

  if (acca) {
    ulElement.removeChild(clickedElement);
  }
}

ulElement.addEventListener('click', removeFood);







/* Kvitto */

/* gömmer klassen */
function hideKvittoCont() {
  kvittoCont.classList.add('d-none');
}

window.addEventListener('load', hideKvittoCont);






// Hämtar allt som ska navändas
const kvittoCont = document.querySelector('.kvittoCont');
const orderBtn = document.querySelector('.orderBtn');
const kvittoBtn = document.querySelector('.kvittoBtn');
const kundOrderList = document.querySelector('.kund-order');
const kvittOrderList = document.querySelector('.kvitto-order');









// Få content till kvitto från beställning
function copyOrderToKvitto() {
  kvittOrderList.innerHTML = '';

  const items = kundOrderList.children;
  for (let i = 0; i < items.length; i++) {
    const itemClone = items[i].cloneNode(true);
    kvittOrderList.appendChild(itemClone);
  }

  const kvittoOrderList = document.querySelector('.kvitto-order');
  const kvittoitems = kvittoOrderList.children;
  
  let totalSum = 0;
  
  for (let i = 0; i < items.length; i++) {
    const itemText = kvittoitems[i].textContent;
    const priceMatch = itemText.match(/\d+\.?\d*/); // Extract the price value using a regular expression
    if (priceMatch) {
      const price = parseFloat(priceMatch[0]);
      totalSum += price;
    }
  }
  
  var listSumma = document.createElement('li');
  listSumma.classList.add('mt-4');
  listSumma.textContent = "Summan är: " + (totalSum - 1) + ' kr'; // Subtract 1 from totalSum before assigning it to the textContent
  kvittoOrderList.appendChild(listSumma);
  

  // Clear the content in .kund-order   
  kundOrderList.innerHTML = '';
}

orderBtn.addEventListener('click', copyOrderToKvitto);











// Gömmer och visar kvitto eller beställning
function showHid(){

   document.querySelector('.order').classList.add('d-none');
   document.querySelector('.kvittoCont').classList.remove('d-none');

}

orderBtn.addEventListener('click', showHid);

function HideShow(){

  document.querySelector('.order').classList.remove('d-none');
   document.querySelector('.kvittoCont').classList.add('d-none');

}

kvittoBtn.addEventListener('click', HideShow);





/* Allergier */


