const cards = Array.from(document.querySelectorAll(".card"));

// close all cards
const closeAllCards = () => {
  cards.forEach((e) => e.classList.remove("open"));
};

// toggle class of selected card
const toggleCategory = (e) => {
  e.classList.toggle("open");
};

cards.forEach((card) => {
  card.addEventListener("click", () => {
    let open = card.classList.contains("open")
    if (!open) {
      closeAllCards();
      toggleCategory(card); // if is not open, close all and open selected
    } else {
      toggleCategory(card); // if open, only close
    }
  });
});

