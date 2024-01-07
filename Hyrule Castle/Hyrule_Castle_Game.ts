// Imoort the module 'fs' from Node.js.
const fs = require("fs");
// Imports the readline-sync module to handle user input synchronously.
const rl = require("readline-sync");

//  Defines a Monster interface with name, hp (hit points), and str (strength) properties.
interface Monster {
  name: string;
  hp: number;
  str: number;
}

// Constants defining color codes for console text formatting.
const Colors = {
  Reset: "\x1b[0m",
 FgRed: "\x1b[31m",
 FgGreen: "\x1b[32m",
 FgBlue: "\x1b[34m",
 FgYellow: "\x1b[33m",
 FgMagenta: "\x1b[35m",
 BgRed: "\x1b[41m",
 BgGreen: "\x1b[42m",
 BgYellow: "\x1b[43m",
}

// // Objects representing the hero, monsters, and boss with their respective attributes.
const jsonHero: Monster = { name: "Link", hp: 60, str: 15 };
const jsonMonster: Monster = { name: "Bokoblin", hp: 30, str: 5 };
const jsonBoss: Monster = { name: "Ganon", hp: 150, str: 20 };

// // Variables to track health points and counters.
let hpmonstre: number = jsonMonster.hp;
let hplink: number = jsonHero.hp;
let hpboss: number = jsonBoss.hp;
let i: number = 1;

  // Creates a string representing hearts based on the hit points passed as a parameter.
  function coeur(hp: number) {
  let vie: string = "";
  for (let index = 0; index < hp; index += 1) {
    vie += "❤";
  }
  return vie;
}

// Displays introductory text in the console and waits for the user to press Enter to start the game.
function hyrulePrint() {
  console.log(
    "\n                        T h e  H y r u l e  C a s t l e\n                       ______________________________________"
  );

  console.log(
    `\n                           Welcome to the ${Colors.FgRed}Hyrule Castle !${Colors.Reset}\n${Colors.FgMagenta}The rules are simple.${Colors.Reset}\nYou have the possibility to have ${Colors.BgGreen}Heroes${Colors.Reset} with different ${Colors.FgGreen}HP${Colors.Reset} and ${Colors.FgYellow}STR${Colors.Reset}\nYour mission is to ${Colors.BgRed}kill monsters${Colors.Reset} until you reach ${Colors.FgYellow}Fight 10${Colors.Reset} then you have to face the ${Colors.BgRed}Boss.${Colors.Reset}\n`
  );
  rl.question(
    `                         Press enter to start the ${Colors.FgRed}fights${Colors.Reset}...`
  );
}

// Function handling combat between the hero and a monster
function linkCombatMonster() {
  while (hpmonstre > 0 && hplink > 0) {
    i += 1;
    console.clear();
    printvaluesmonster(hpmonstre, hplink, i);
    const answer: string = rl.question("[1] Attack   [2] Heal : ");

    hplink -= jsonMonster.str;
    if (answer === "1") {
      hpmonstre -= jsonHero.str;
    } else if (answer === "2") {
      if (hplink >= jsonHero.hp / 2) {
        hplink = jsonHero.hp;
      } else {
        hplink += jsonHero.hp / 2;
      }
    } else {
      console.log(`${Colors.Reset}\nOUPS...You missed your ${Colors.FgGreen}turn${Colors.Reset}\n`);
    }
    if (hpmonstre <= 0) {
      console.log(`Bokoblin ${Colors.FgRed}is dead`);
    } else if (hplink < 1) {
      console.log(
        `${Colors.FgRed}G A M E  O V E R${Colors.Reset} 😈 ${Colors.FgYellow}you have been slayed by a damned Bokoblin !${Colors.Reset}`
      );
      process.exit(1);
    }
    console.clear();
  }
}

// Function handling combat between the hero and the boss
function linkCombatBoss() {
  while (hpboss > 0 && hplink > 0) {
    i += 1;
    printvaluesboss(hpboss, hplink, i);
    const answer: string = rl.question("[1] Attack   [2] Heal : ");

    hplink -= jsonBoss.str;
    if (answer === "1") {
      hpboss -= jsonHero.str;
      console.clear();
    } else if (answer === "2") {
      if (hplink >= jsonHero.hp / 2) {
        hplink = jsonHero.hp;
      } else {
        hplink += jsonHero.hp / 2;
      }
    } else {
      console.log(`${Colors.Reset}\nOUPS...You missed your ${Colors.FgGreen}turn${Colors.Reset}\n`);
    }
    if (hpboss <= 0) {
      console.log(`${Colors.FgGreen}Y O U  W O N !${Colors.Reset}`);
      console.log(`G a n o n${Colors.FgRed} I s  D e a d`);
    } else if (hplink < 1) {
      console.log(
        `${Colors.FgRed}G A M E  O V E R${Colors.Reset} 😈 ${Colors.FgYellow}you have been slayed by G O R O N !${Colors.Reset}`
      );
      process.exit(1);
    }
    console.clear();
  }
}

// Function to print the current values of the monster and hero during combat.
function printvaluesmonster(hpmonstre: number, hplink: number, round: number) {
  console.log(
    `\n       ${Colors.FgBlue}========= ${Colors.FgRed}ROUND ${[round]}${Colors.FgBlue} =========\n`
  );
  console.log(Colors.FgRed, jsonMonster.name, Colors.Reset);
  console.log(`HP: ${Colors.FgRed}${coeur(hpmonstre)} ${hpmonstre} ${Colors.Reset}/ 30`);
  console.log(Colors.FgGreen, jsonHero.name, Colors.Reset);
  console.log(`HP: ${Colors.FgGreen}${coeur(hplink)} ${hplink} ${Colors.Reset}/ 60`);
  console.log(
    `\n       ${Colors.FgBlue}=========${Colors.Reset} OPTIONS ${Colors.Reset}${Colors.FgBlue} =========\n`
  );
}

// Function to print the current values of the boss and hero during combat.
function printvaluesboss(hpmonstre: number, hplink: number, round: number) {
  console.log(
    `\n       ========= ${Colors.FgRed}ROUND ${[round]}${Colors.Reset} =========\n`
  );
  console.log(Colors.FgRed, jsonBoss.name, Colors.Reset);
  console.log(`HP: ${Colors.FgRed}${coeur(hpmonstre)} ${hpmonstre} ${Colors.Reset}/ 150`);
  console.log(Colors.FgGreen, jsonHero.name, Colors.Reset);
  console.log(`HP: ${Colors.FgGreen}${coeur(hplink)} ${hplink} ${Colors.Reset}/ 60`);
  console.log(
    `\n       ${Colors.FgBlue}=========${Colors.Reset} OPTIONS ${Colors.Reset}${Colors.FgBlue}=========${Colors.Reset}\n`
  );
}

// Function orchestrating the game progression through fights with monsters and the boss.
function toBoss() {
  hyrulePrint();
  for (let index = 1; index <= 9; index += 1) {
    console.clear();
    console.log(
      `\n                                   ========= ${Colors.FgYellow}FIGHT ${index}${Colors.Reset} =========`
    );
    console.log(
      `\n       ========= ${Colors.FgRed}ROUND ${index}${Colors.Reset} =========\n`
    );
    console.log(index);
    console.log(Colors.FgRed, jsonMonster.name, Colors.Reset);
    console.log(`HP: ${Colors.FgRed}${coeur(hpmonstre)} ${hpmonstre} ${Colors.Reset}/ 30`);
    console.log(Colors.FgGreen, jsonHero.name, Colors.Reset);
    console.log(`HP: ${Colors.FgGreen}${coeur(hplink)} ${hplink} ${Colors.Reset}/ 60`);
    console.log(
      `\n       ${Colors.FgBlue}=========${Colors.Reset} OPTIONS ${Colors.Reset}${Colors.FgBlue}=========\n`
    );
    const answer: string = rl.question("[1] Attack   [2] Heal : ");
    if (answer === "1") {
      hpmonstre -= 15;
    } else if (answer === "2") {
      if (hplink >= jsonHero.hp / 2) {
        hplink = jsonHero.hp;
      } else {
        hplink += jsonHero.hp / 2;
      }
    }
    hplink -= 5;

    linkCombatMonster();
    hpmonstre = jsonMonster.hp;
  }
  linkCombatBoss();
}

// Entry point to start the game.
toBoss();
