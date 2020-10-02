// TODO: write your code here
import Character from './character';

// eslint-disable-next-line no-console
console.log('worked');

const character = new Character('Alex', 'Bowman');
Character.prototype.damage.call(character, 100);
// eslint-disable-next-line no-console
console.log(character);
