
function Item (name) {
  this.name = name;
}

function Weapon (name, damage) {
  
  this.damage = damage;
  Item.call(this, name);
}

Weapon.prototype = Object.create(Item.prototype);

function Food (name, energy) {
  this.energy = energy;
  Item.call(this, name);
}

Food.prototype = Object.create(Item.prototype);


function Player (name, health, strength, speed) {

  var _pack = [];
  var _maxHealth = health;
  this.name = name;
  this.health = health;
  this.strength = strength;
  this.speed = speed;
  this.isAlive = true;
  this.equipped = false;
  var itemName = '';
  

  this.getPack = function () {
    return _pack;
  }

  this.getMaxHealth = function () {
    return _maxHealth;
  }
  
  this.checkPack = function () {
    for (var i = 0; i < this.getPack().length; i++){
      itemName = itemName.concat(this.getPack()[i].name + ' ');
    }
    console.log(this.name + ' has ' + itemName);
  }

  this.takeItem = function (item) {
    if (_pack.length < 3){
      _pack.push(item);
      this.checkPack();
      return true;
    }
    
    else {
      console.log('Your pack is too full to store another item!');
      return false;
    }
  }
  
  this.discardItem = function (item) {
    var itemsIndex = _pack.indexOf(item);

    if (itemsIndex !== -1) {
       _pack.splice(itemsIndex, 1);
       console.log(this.name + ' discarded ' + item.name);
      return true;
    }
    else {
      console.log('Item not found in pack! Couldn\'t discard ' + item.name);
      return false;
    }
  }

  this.equip = function (itemToEquip) {

    if (itemToEquip instanceof Weapon && this.getPack().includes(itemToEquip)){
      if (this.equipped === false){
        this.equipped = itemToEquip;
        this.discardItem(itemToEquip);
      }
      else {
        var itemToEquipIndex = this.getPack().indexOf(itemToEquip);
        _pack.splice(itemToEquipIndex, 1, this.equipped);
        this.equipped = itemToEquip;
      }
    }
  }

  this.eat = function (itemToEat) {
    if (itemToEat instanceof Food && this.getPack().includes(itemToEat)) {
      var itemToEatIndex = this.getPack().indexOf(itemToEat);
      _pack.splice(itemToEatIndex, 1);
        if (this.health != this.getMaxHealth()){
          this.health += itemToEat.energy;
          if (this.health > this.getMaxHealth()) {
            this.health = this.getMaxHealth();
          }
        }
    }
    return;
  }

  this.useItem = function (item) {
    if (item instanceof Weapon) {
      this.equip(item);
    }
    else if (item instanceof Food) {
      this.eat(item);
    }
  }

  this.equippedWith = function () {
    
    if (this.equipped != false) {
      console.log(this.name + ' has ' + this.equipped.name + ' equipped.');
      return this.equipped.name;
    }
    else {
      console.log('There is nothing equipped!');
      return false;
    }
  }
}

function Zombie (health, strength, speed) {
  var _maxHealth = health;
  this.health = health;
  this.strength = strength;
  this.speed = speed;
  this.isAlive = true;
}

function FastZombie (health, strength, speed) {

  Zombie.call(this, health, strength, speed);
}

FastZombie.prototype = Object.create(Zombie.prototype);

function StrongZombie (health, strength, speed) {

  Zombie.call(this, health, strength, speed);
}

StrongZombie.prototype = Object.create(Zombie.prototype);

function RangedZombie (health, strength, speed) {

  Zombie.call(this, health, strength, speed);
}

RangedZombie.prototype = Object.create(Zombie.prototype);

/**
 * Class => RangedZombie(health, strength, speed)
 * -----------------------------
 * Creates a ranged zombie.
 *
 * The RangedZombie class constructor will call 
 *   the super class (Zombie) constructor
 *   while passing in the 3 Zombie constructor params
 *
 * @name RangedZombie
 * @param {number} health           The zombie's health.
 * @param {number} strength         The zombie's strength.
 * @param {number} speed            The zombie's speed.
 */


/**
 * StrongZombie Extends Zombie Class
 * -----------------------------
 */



/**
 * Class => ExplodingZombie(health, strength, speed)
 * -----------------------------
 * Creates an exploding zombie.
 *
 * The ExplodingZombie class constructor will call 
 *   the super class (Zombie) constructor
 *   while passing in the 3 Zombie constructor params
 *
 * @name ExplodingZombie
 * @param {number} health           The zombie's health.
 * @param {number} strength         The zombie's strength.
 * @param {number} speed            The zombie's speed.
 */


/**
 * ExplodingZombie Extends Zombie Class
 * -----------------------------
 */




/**
 * Sample run.
 * Feel free to edit this and check your game logic.
 */
function runGame() {
  // var player = new Player("Joan", 500, 30, 70);
  // var zombie = new Zombie(40, 50, 20);
  // var charger = new FastZombie(175, 25, 60);
  // var tank = new StrongZombie(250, 100, 15);
  // var spitter = new RangedZombie(150, 20, 20);
  // var boomer = new ExplodingZombie(50, 15, 10);

  // var shovel = new Weapon("shovel", 15);
  // var sandwich = new Food("sandwich", 30);
  // var chainsaw = new Weapon("chainsaw", 25);

  // player.takeItem(shovel);
  // player.takeItem(sandwich);
  // player.takeItem(chainsaw);
  // player.discardItem(new Weapon("scythe", 21));
  // player.discardItem(shovel);
  // player.checkPack();
  // player.takeItem(shovel);
  // player.checkPack();

  // player.equippedWith();
  // player.useItem(chainsaw);
  // player.equippedWith();
  // player.checkPack();

  // player.useItem(shovel);
  // player.equippedWith();
  // player.checkPack();

  // player.health = 487;
  // console.log("Before health: " + player.health);
  // player.useItem(sandwich);
  // console.log("After health: " + player.health);
  // player.checkPack();
}
