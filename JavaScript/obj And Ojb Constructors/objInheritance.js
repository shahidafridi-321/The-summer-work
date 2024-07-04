function Hero(name, level) {
  this.name = name;
  this.level = level;
}


function Worrior(name, level, weapon) {
  Hero.call(this, name, level);

  this.weapon = weapon;
}
function Healer(name, level, spell) {
  Hero.call(this, name, level);
  this.spell = spell;
}

Object.setPrototypeOf(Worrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

Hero.prototype.greeting = function () {
  return `${this.name} says hello.`
};

Worrior.prototype.attack = function () {
  return `${this.name} attacks with ${this.weapon}`;
};

Healer.prototype.heal = function () {
  return `${this.name} costs ${this.spell}`;
};
let hero1 = new Worrior('shahid', 3, 'axe');
let hero2 = new Healer('khan', 1, 'cure');

console.log(hero1.attack());
console.log(hero2.greeting());
