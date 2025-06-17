function upTitle() {
  const titleNote = document.getElementById("title");
  titleNote.textContent = "Enjoy to Learn!";
}

function descText() {
  const parentNote = document.getElementById("descText");
  const textNode = document.createElement("h4");
  textNode.textContent = "Ini Description";

  parentNote.appendChild(textNode);
}
