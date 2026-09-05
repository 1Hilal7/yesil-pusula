"use strict";

const actionButton = document.getElementById("check");
const codeInput = document.getElementById("qkod");
const codeEntry = document.getElementById("code-entry");
const heading = document.getElementById("game-heading");
const errorMessage = document.getElementById("invalidcode");
const optionList = document.querySelector(".option-list");

let currentItem = null;
let nextItem = null;
let phase = "code";

function resetGame() {
  currentItem = null;
  nextItem = null;
  phase = "code";

  heading.textContent = "Kod Girişi";
  codeEntry.hidden = false;
  codeInput.value = "";
  errorMessage.hidden = true;
  errorMessage.textContent = "";
  optionList.hidden = true;
  optionList.replaceChildren();
  actionButton.hidden = false;
  actionButton.textContent = "Kontrol Et";
  codeInput.focus();
}

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.hidden = false;
}

function openCode() {
  const code = codeInput.value.trim();
  const item = GAME_DATA[code];

  if (!item) {
    showError("Geçerli bir oyun kodu girin.");
    return;
  }

  currentItem = item;
  errorMessage.hidden = true;
  codeEntry.hidden = true;
  heading.textContent = currentItem.info;
  actionButton.textContent = "Soruyu Göster";
  phase = "info";
}

function showQuestion() {
  if (!currentItem) {
    resetGame();
    return;
  }

  heading.textContent = currentItem.question;
  optionList.replaceChildren();

  currentItem.answers.forEach((answer, answerIndex) => {
    const optionButton = document.createElement("button");
    optionButton.type = "button";
    optionButton.className = "option";
    optionButton.textContent = answer;
    optionButton.addEventListener("click", () => selectAnswer(optionButton, answerIndex));
    optionList.appendChild(optionButton);
  });

  optionList.hidden = false;
  actionButton.hidden = true;
  phase = "question";
}

function selectAnswer(selectedButton, selectedIndex) {
  if (!currentItem || phase !== "question") {
    return;
  }

  const options = Array.from(optionList.children);
  const correctButton = options[currentItem.answer];

  if (!correctButton) {
    return;
  }

  if (selectedIndex !== currentItem.answer) {
    selectedButton.classList.add("incorrect");
  }

  correctButton.classList.add("correct");
  options.forEach((option) => {
    option.disabled = true;
  });

  if (currentItem.next && GAME_DATA[currentItem.next]) {
    nextItem = GAME_DATA[currentItem.next];
    actionButton.textContent = "Sonraki Soru";
    phase = "next-question";
  } else {
    nextItem = null;
    actionButton.textContent = "İpucunu Göster";
    phase = "hint";
  }

  actionButton.hidden = false;
}

function showNextQuestion() {
  if (!nextItem) {
    phase = "hint";
    showHint();
    return;
  }

  currentItem = nextItem;
  nextItem = null;
  showQuestion();
}

function showHint() {
  optionList.hidden = true;
  heading.textContent = currentItem?.hint || "Oyun tamamlandı.";
  actionButton.textContent = "Başa Dön";
  phase = "reset";
}

function handleAction() {
  switch (phase) {
    case "code":
      openCode();
      break;
    case "info":
      showQuestion();
      break;
    case "next-question":
      showNextQuestion();
      break;
    case "hint":
      showHint();
      break;
    case "reset":
    default:
      resetGame();
      break;
  }
}

actionButton.addEventListener("click", handleAction);

codeInput.addEventListener("input", () => {
  codeInput.value = codeInput.value.replace(/\D/g, "").slice(0, 6);
  errorMessage.hidden = true;
});

codeInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && phase === "code") {
    handleAction();
  }
});
