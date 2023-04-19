const firstName = "Piotr";
const age = 28;

console.log(
  `Siema. Nazywam się ${firstName} i mam ${age} lat. Witam CIEBIE na MOJEJ stronie.`
);



const heading = document.querySelector('.title-header__title--js');
console.log(heading.innerHTML);

heading.innerHTML = `Siema. Nazywam się ${firstName} i mam ${age} lat. Witam CIEBIE na MOJEJ stronie.`;
console.log(heading.innerHTML);