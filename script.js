function drag(e) {
  e.dataTransfer.setData("text", e.target.id);
}

function allowDrop(e) {
  e.preventDefault();
}

function drop(e) {
  let data = e.dataTransfer.getData("text");
  e.target.appendChild(document.getElementById(data));
}


