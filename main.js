const firstName = "Piotr";
const age = 28;

console.log(
  `Siema. Nazywam się ${firstName} i mam ${age} lat. Witam CIEBIE na MOJEJ stronie.`
);

//const heading = document.querySelector('.title-header__title--js');
//console.log(heading.innerHTML);

//heading.innerHTML = `Siema. Nazywam się ${firstName} i mam ${age} lat. Witam CIEBIE na MOJEJ stronie.`;
//console.log(heading.innerHTML);

function calculate(myNumber) {
  console.log(`Dostałam ${myNumber}`);
  return myNumber * 7;
}

const myResoult = calculate(3.14);

console.log(`Wynik to  ${myResoult}`);

function greet (age, firstName){
  console.log(
    `Witaj drogi odwiedzający nazywam się ${firstName} i mam ${age} lat.`
      );
}

greet(age,firstName);

function createContent(querySelectorContent, content);