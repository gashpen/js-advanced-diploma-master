/* eslint-disable max-len */
import GamePlay from './GamePlay';
import themes from './themes';
import Team from './Team';
import { generateTeam, characterGenerator } from './generators';
import PositionedCharacter from './PositionedCharacter';

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
  }

  init() {
    this.gamePlay.drawUi(themes.prairie);
    const team = new Team();
    // генератор массива союзников и противников;
    const enemyTeam = generateTeam(team.enemyTeam(), 5, 3);
    const alliedTeam = generateTeam(team.alliedTeam(), 5, 3);
    // генератор 1 юнита союзника и противника;
    const enemyCharacter = characterGenerator(team.enemyTeam(), 3);
    const alliedCharacter = characterGenerator(team.alliedTeam(), 3);
    // массивы с номерами ячеек для генерации случайного числа в нужном диапазоне;
    const positionEnemyArr = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47];
    const positionAlliedArr = [0, 1, 8, 9, 16, 17, 24, 25, 32, 33, 40, 41, 48, 49, 56, 57];
    // случайные числа из массива для позиционирования юнитов;
    const positionEnemy = positionEnemyArr[Math.floor(Math.random() * positionEnemyArr.length)];
    const positionAllied = positionAlliedArr[Math.floor(Math.random() * positionAlliedArr.length)];
    // объект для отрисовки
    const positionedCharacterEnemy = new PositionedCharacter(enemyCharacter.next().value, positionEnemy);
    const positionedCharacterAllied = new PositionedCharacter(alliedCharacter.next().value, positionAllied);

    const gamePlay = new GamePlay();
    gamePlay.redrawPositions([positionedCharacterAllied]);
    console.log(positionedCharacterEnemy);
  }

  onCellClick(index) {
    // TODO: react to click
  }

  onCellEnter(index) {
    // TODO: react to mouse enter
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
  }
}
