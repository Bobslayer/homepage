function createContent(querySelectorContent, content) {
  const element = document.querySelector(querySelectorContent);

  element.innerHTML = content;
}

createContent(".notes_paragraph--js", `Bardzo lubię JSa! :)`);

const humanOne = {
  name: 'Maciek',
  age: 32,
}

const humanTwo = {
  name: 'Stefan',
  age: 32,

}
console.log(`Wiek ${humanTwo.name} to ${humanTwo.age}`);
humanTwo.age = 35;
console.log(`Wiek ${humanTwo.name} to ${humanTwo.age}`);