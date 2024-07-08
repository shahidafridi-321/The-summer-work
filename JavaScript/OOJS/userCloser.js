function createUser(name) {
  const discordName = "@" + name;

  let reputation = 0;
  const getReputation = () => reputation;
  const giveReputation = () => reputation++;

  return { name, discordName, getReputation, giveReputation };
}

function createPlayer(name, level) {
  const { getReputation, giveReputation } = createUser(name);

  const increaseLevel = () => level++;
  return {
    name,
    giveReputation,
    getReputation,
    increaseLevel
  };
}


let player1 = createPlayer('shahid', 20);
player1.giveReputation();
player1.giveReputation();
player1.giveReputation();
player1.increaseLevel();
console.log(player1.increaseLevel());
console.log(player1.name);

// const josh = createUser("josh");
// josh.giveReputation();
// josh.giveReputation();
// josh.giveReputation();

// console.log(josh.giveReputation());
// console.log(josh.getReputation());

