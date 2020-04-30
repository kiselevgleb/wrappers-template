// TODO: write your code here
import sum from './basic';

export default function wrap(params) {
  const {
    name,
    type,
    health,
    level,
    attack,
    defence
  } = params;
  let t;
  switch (type) {
    case 'Bowman':
      t = "\u{1F620}";
      break;
    case 'Swordsman':
      t = "\u{1F621}";
      break;
    case 'Magician':
      t = "\u{1F9D0}";
      break;
    case 'Daemon':
      t = "\u{1F47F}";
      break;
    case 'Undead':
      t = "\u{1F480}";
      break;
    case 'Zombie':
      t = "\u{1F9DF}";
      break;
  }
  let st = t + " " + name.split("")[0] + "(" + level + ") " + "\u{2694}" + attack + " " + "\u{1F6E1}" + defence + " " + "\u{2764}" + health;
  return st;
}
