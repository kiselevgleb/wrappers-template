import wrap from '../app';

const obj = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10
};
const objEnd = "😠 Л(1) ⚔40 🛡10 ❤50";
test('should mas', () => {
  let result = wrap(obj);
  expect(result).toEqual(objEnd);
});