const nums = [1, 2, 3, 4, 5];

const modifiedArr = nums.map((element) => {
  return element * element;
});

console.log(modifiedArr);

const names = ["alice", "bob", "charlie", "danielle"];

const modifiedNames = names.map((name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
});

console.log(modifiedNames);

const pokemons = ["Bulbasaur", "Charmander", "Squirtle"];

const modifiedPokemon = pokemons.map((pokemon) => {
  return `<p>${pokemon}</p>`;
});

console.log(modifiedPokemon);
