/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
/**
 * Формирует экземпляр персонажа из массива allowedTypes со
 * случайным уровнем от 1 до maxLevel
 *
 * @param allowedTypes массив классов
 * @param maxLevel максимальный возможный уровень персонажа
 * @returns генератор, который при каждом вызове
 * возвращает новый экземпляр класса персонажа
 *
 */
export function* characterGenerator(allowedTypes, maxLevel) {
  while (true) {
    const randomChar = allowedTypes[Math.floor(Math.random() * allowedTypes.length)];
    const randomLvl = Math.floor(Math.random() * maxLevel) + 1;
    randomChar.level = randomLvl;
    yield randomChar;
  }
}

/**
 * Формирует массив персонажей на основе characterGenerator
 * @param allowedTypes массив классов
 * @param maxLevel максимальный возможный уровень персонажа
 * @param characterCount количество персонажей, которое нужно сформировать
 * @returns экземпляр Team, хранящий экземпляры персонажей. Количество персонажей в команде - characterCount
 * */
export function generateTeam(allowedTypes, maxLevel, characterCount) {
  const arr = [];

  for (let i = 0; i < characterCount; i += 1) {
    arr.push(allowedTypes[Math.floor(Math.random() * allowedTypes.length)]);
  }

  for (let i = 0; i < allowedTypes.length; i += 1) {
    allowedTypes[i].level = Math.floor(Math.random() * maxLevel) + 1;
  }
  return arr;
}
