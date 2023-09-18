import Bowman from './characters/Bowman';
import Daemon from './characters/Daemon';
import Magician from './characters/Magician';
import Swordsman from './characters/Swordsman';
import Undead from './characters/Undead';
import Vampire from './characters/Vampir';

export default class Team {
  constructor() {
    this.team = [
      this.daemon = new Daemon(),
      this.bowman = new Bowman(),
      this.magician = new Magician(),
      this.swordsman = new Swordsman(),
      this.undead = new Undead(),
      this.vampire = new Vampire(),
    ];
  }

  enemyTeam() {
    return [this.daemon, this.undead, this.vampire];
  }

  alliedTeam() {
    return [this.bowman, this.magician, this.swordsman];
  }
}
