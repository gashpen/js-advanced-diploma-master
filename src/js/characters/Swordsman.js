import Character from '../Character';

export default class Swordsman extends Character {
  constructor(level) {
    super(level);
    this.level = level;
    this.attack = 40;
    this.defence = 10;
    this.health = 25;
    this.type = 'swordsman';
  }
}
