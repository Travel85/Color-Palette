//hier kommt die Logik für unsere Color-palette
import colors from "./color.js";

const bodyContainer = document.querySelector(".bodyContainer");

//iterate over colors array and create div and p classes, add css class, set color and description and build DOM structure
colors.forEach((element) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const profileCard = document.createElement("div");
  profileCard.classList.add("profil-card");
  profileCard.style.backgroundColor = element.hex;
  card.appendChild(profileCard);

  const cardDescription = document.createElement("div");
  cardDescription.classList.add("card-description");
  card.appendChild(profileCard);

  const description = document.createElement("p");
  description.classList.add("description");
  description.innerText = element.name;

  cardDescription.appendChild(description);
  card.appendChild(cardDescription);
  bodyContainer.appendChild(card);
});

const addButton = document.querySelector("#addButton");
const searchBar = document.querySelector("#searchBar");

addButton.addEventListener("click", (e) => {
  console.log(`Button clicked!`);

  const textInput = searchBar.value.toUpperCase();

  console.log(textInput);

  let cards = document.querySelectorAll("p.description");

  cards.forEach((element) => {
    if (!textInput == "") {
      if (textInput === element.innerText) {
        console.log(
          `${textInput} matches ${element.innerText}, so nothing to do`
        );
      } else {
        console.log(
          `${textInput} does not match ${element.innerHTML}, so hide it`
        );

        element.parentElement.parentElement.style.display = "none";
      }
    } else {
      console.log(`textinput is empty!`);
      element.parentElement.parentElement.style.display = "block";
    }
  });
});
