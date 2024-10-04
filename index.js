// Write your code here
document.querySelector("#main").remove();

const newHeader = document.createElement("h1");
newHeader.id = 'victory'
newHeader.textContent = "Joyce Wamocho is the champion"
document.querySelector("main").append(newHeader);

