export default function Character(name, type) {
  this.name = name;
  this.type = type;
  this.health = 100;
  this.attack = 10;
  this.defence = 40;
}

Character.prototype = {
  damage(points) {
    if (points < 0) {
      throw new Error('урон не может быть отрицательным');
    }

    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  },
};
