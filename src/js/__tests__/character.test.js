import Character from '../character';

test.each([
  ['Alex', 'Bowman', -10],
])('%p %p %p', (name, type, damage) => {
  expect(() => {
    const character = new Character(name, type);
    Character.prototype.damage.call(character, damage);
  }).toThrow();
});

test.each([
  ['Alex', 'Bowman', 0, {
    attack: 10,
    defence: 40,
    health: 100,
    name: 'Alex',
    type: 'Bowman',
  }],
  ['Semen', 'Swordsman', 100, {
    attack: 10,
    defence: 40,
    health: 40,
    name: 'Semen',
    type: 'Swordsman',
  }],
  ['noob', 'Daemon', 170, {
    attack: 10,
    defence: 40,
    health: -2,
    name: 'noob',
    type: 'Daemon',
  }],
])('%p %p %p', (name, type, damage, expected) => {
  const result = new Character(name, type);
  Character.prototype.damage.call(result, damage);
  expect(result).toEqual(expected);
});

test('health < 0', () => {
  const result = new Character('deadnoob', 'Zombie');
  result.health = -100;
  Character.prototype.damage.call(result, 40);
  expect(result).toEqual({
    attack: 10,
    defence: 40,
    health: -100,
    name: 'deadnoob',
    type: 'Zombie',
  });
});
