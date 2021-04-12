// variable declaration
const ontspan = document.querySelector(".ontspan");
const stoel = document.querySelector(".stoel");
const cupping = document.querySelector(".cupping");
const voet = document.querySelector(".voet");
const modal = document.querySelector(".modal");
const afspraak = document.querySelector(".afspraak");
const info = document.querySelector(".info");
const close = document.querySelector(".close-modal");
const modalTitle = document.querySelector(".h1-modal");
const beschrijving = document.querySelector(".modal-tekst");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

// build of the modal window
const makeModal = (linkType) => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");

  switch (linkType) {
    case 1:
      modalTitle.textContent = "Ontspanningsmassage";
      beschrijving.textContent =
        "Een heerlijk uurtje verwennerij met geurende olie en warme bekwame handen en u kan er weer tegen. Helend voor lichaam en geest, u komt weer in balans.";

      break;
    case 2:
      modalTitle.textContent = "Stoelmassage";
      beschrijving.textContent =
        "Lekker ontspannend zitten en toch gemasseerd worden in ongeveer een half uurtje tijd.  Hiervoor hoeft u niet uit de kleren wat voor veel mensen toch wel een drempel is.";
      break;
    case 3:
      modalTitle.textContent = "Cupping";
      beschrijving.textContent =
        "Een diepere massage techniek waarbij gebruik wordt gemaakt van een vacuumpomp om de cups te zetten. Deze massagevorm is iets intenser en zorgt voor een extra goede doorbloeding van de huidlagen.";
      break;
    case 4:
      modalTitle.textContent = "Voetflexologie";
      beschrijving.textContent =
        "Voeten zijn zoveel meer dan alleen dragers van het lichaam. Een goede voetmassage zet het lichaam aan tot zelfregulering.";
      break;
    case 5:
      modalTitle.textContent = "Afspraak";
      beschrijving.textContent =
        "Alle behandelingen zijn op afspraak. Een afspraak duurd een uur en vinden plaats in mijn praktijk. Prijs is vanaf 42,50 euro per uur. Stoelmassage kan zowel gegeven worden in mijn pratijk of op een (kantoor) locatie en duurt een half uur.";
      break;
    case 6:
      modalTitle.textContent = "Wat kunt u verwachten?";
      beschrijving.textContent =
        "Tijdens de eerste kennismaking kijken we welke vorm van massage bij u past. Tenslotte is elk mens anders niks staat vast en in overleg kan er veel.Er kan zelfs gekozen worden voor een combinatie van behandelingen. U staat centraal en de behandeling kan worden gezien als een jas die lekker mag passen. De behandeling sluit ik altijd af met een rustmoment.";
      break;
  }
};

// sluiten van de modal window
const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// event listeners om modal te maken
ontspan.addEventListener("click", () => {
  makeModal(1);
});
stoel.addEventListener("click", () => {
  makeModal(2);
});
cupping.addEventListener("click", () => {
  makeModal(3);
});
voet.addEventListener("click", () => {
  makeModal(4);
});
afspraak.addEventListener("click", () => {
  makeModal(5);
});
info.addEventListener("click", () => {
  makeModal(6);
});

// event listenets om modal te sluiten
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
