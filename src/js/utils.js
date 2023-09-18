/**
 * @todo
 * @param index - индекс поля
 * @param boardSize - размер квадратного поля (в длину или ширину)
 * @returns строка - тип ячейки на поле:
 *
 * top-left
 * top-right
 * top
 * bottom-left
 * bottom-right
 * bottom
 * right
 * left
 * center
 *
 * @example
 * ```js
 * calcTileType(0, 8); // 'top-left'
 * calcTileType(1, 8); // 'top'
 * calcTileType(63, 8); // 'bottom-right'
 * calcTileType(7, 7); // 'left'
 * ```
 * */
export function calcTileType(index, boardSize) {
  // TODO: ваш код будет тут
  if (index === 0 && boardSize === 8) {
    return 'top-left';
  }

  if (index != 56) {
    if (index % 8 === 0 && boardSize === 8) {
      return 'left';
    }
  }
  if (index === 63 && boardSize === 8) {
    return 'bottom-right';
  }

  if (index >= 57 && boardSize === 8) {
    return 'bottom';
  }
  if (index === 7 && boardSize === 8) {
    return 'top-right';
  }
  if (index % 8 === 7 && boardSize === 8) {
    return 'right';
  }
  if (index === 56 && boardSize === 8) {
    return 'bottom-left';
  }
  if (index <= 8 && boardSize === 8) {
    return 'top';
  }
  return 'center';
}

export function calcHealthLevel(health) {
  if (health < 15) {
    return 'critical';
  }

  if (health < 50) {
    return 'normal';
  }

  return 'high';
}
