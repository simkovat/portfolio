/* excersice for creating arrays and objects and manipulating the data in them or displaying the data */

let team = {
    _players: [
      {firstName: 'Pablo', lastName: 'Sanchez', age: 11},
      {firstName: 'Benjamin', lastName: 'Moller', age: 26},
      {firstName: 'Juanito', lastName: 'Nosenombre', age: 28}
    ],
    _games: [
      {opponent: 'Argentinos', teamPoints: 42, opponentPoints: 27},
      {opponent: 'Colombianos', teamPoints: 12, opponentPoints: 34},
      {opponent: 'Chilenos', teamPoints: 20, opponentPoints: 30}
    ],
    get getPlayers() {
      return this._players;
    },
    get getGames() {
      return this._games;
    },
    addPlayer(firstName, lastName, age) {
      this._players.push({
        firstName: firstName,
        lastName: lastName,
        age: age
      })
    },
    addGame(opponent, teamPoints, opponentPoints){
      this._games.push({
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
      })
    }
  };

  /* testing*/
  
  team.addPlayer('Steps', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team.getPlayers);
  
  team.addGame('Brazilenos', 34, 56);
  team.addGame('Peruanos', 12, 98);
  team.addGame('Venezuelanos', 10, 57);
  console.log(team.getGames);