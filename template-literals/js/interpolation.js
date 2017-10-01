function like(thing) {
  return 'I like ' + thing;
}

function love(thing) {
  return `I like ${thing}`;
}

const sentence = `<p>${}, but ${}.</p>`;

document.querySelector('.interpolation').innerHTML = sentence;
