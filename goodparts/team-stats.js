const team = {
    _players: [
      { firstName: "Cristiano", lastname: "Ronaldo", age: 39 },
      { firstName: "Messi", lastName: "Cuccittini", age: 37 },
      { firstName: "Neymar", lasName: "da Silva", age: 32 },
    ],
  
    _games: [
      { opponent: "RealMadrid", teamPoints: 18, opponentPoints: 9 },
      { opponent: "Barça", teamPoints: 11, opponentPoints: 15 },
      { opponent: "Sporting Clube de Portugal", teamPoints: 19, opponentPoints: 6}],
  
    get players() {
      return this._player;
    },
  
    get games() {
      return this._games;
    },
  
    addPlayer(newFirstName, newLastName, newAge) {
      const player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge,
      };
      this._players.push(player);
    },
  
  addGame(newOpponent, newTeamPoints, newOpponentPoints){
  const game = {
    opponent: newOpponent,
    TeamPoints: newTeamPoints,
    OpponentPoints: newOpponentPoints,
    };
    this._games.push(game);
  }
  };
  
  
  team.addPlayer("Bugs", "Bunny", 76);
  team.addGame('Titans', 100, 98);
  
  console.log(team._players);
  console.log(team._games);
  