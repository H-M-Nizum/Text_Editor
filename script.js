function gettextarea() {
  return document.getElementById("floatingTextarea2");
}

// ____________ bold ___________

document.getElementById("bold").addEventListener("click", () => {
  let textarea = gettextarea();

  textarea.style.fontWeight =
    textarea.style.fontWeight === "bold" ? "normal" : "bold";
});

// ____________ Italy ___________
document.getElementById("italy").addEventListener("click", () => {
  let textarea = gettextarea();

  textarea.style.fontStyle =
    textarea.style.fontStyle === "italic" ? "normal" : "italic";
});

// ____________ underline ___________
document.getElementById("underline").addEventListener("click", () => {
  let textarea = gettextarea();

  textarea.style.textDecoration =
    textarea.style.textDecoration === "underline" ? "none" : "underline";
});

// _______________ text area left__________________

document.getElementById("left").addEventListener("click", () => {
  let textarea = gettextarea();
  textarea.style.textAlign = "left";
});

// _______________ text area right__________________

document.getElementById("right").addEventListener("click", () => {
  let textarea = gettextarea();
  textarea.style.textAlign = "right";
});

// _______________ text area center__________________

document.getElementById("center").addEventListener("click", () => {
  let textarea = gettextarea();
  textarea.style.textAlign = "center";
});

// _______________ text area justify__________________

document.getElementById("justify").addEventListener("click", () => {
  let textarea = gettextarea();
  textarea.style.textAlign = "justify";
});
