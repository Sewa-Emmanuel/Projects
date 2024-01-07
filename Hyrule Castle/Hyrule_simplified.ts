import * as rl from "readline-sync";

interface Monster {
  name: string;
  hp: number;
  str: number;
}

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
};

const jsonHero: Monster = { name: "Link", hp: 60, str: 15 };
const jsonMonster: Monster = { name: "Bokoblin", hp: 30, str: 5 };
const jsonBoss: Monster = { name: "Ganon", hp: 150, str: 20 };

let hpmonstre: number = jsonMonster.hp;
let hplink: number = jsonHero.hp;
let hpboss: number = jsonBoss.hp;
let i: number = 1;

function coeur(hp: number): string {
  let vie: string = "";
  for (let index = 0; index < hp; index += 1) {
    vie += "❤";
  }
  return vie;
}

function hyrulePrint(): void {
  console.log(
    "\n                        T h e  H y r u l e  C a s t l e\n                       ______________________________________"
  );

  console.log(
    `\n                           Welcome to the ${Colors.FgGreen}Hyrule Castle !${Colors.Reset}\n${Colors.FgMagenta}The rules are simple.${Colors.Reset}\nYou have the possibility to have ${Colors.BgGreen}Heroes${Colors.Reset} with different ${Colors.FgGreen}HP${Colors.Reset} and ${Colors.FgYellow}STR${Colors.Reset}\nYour mission is to ${Colors.BgRed}kill monsters${Colors.Reset} until you reach ${Colors.FgYellow}Fight 10${Colors.Reset} then you have to face the ${Colors.BgRed}Boss.${Colors.Reset}\n`
  );
  rl.question(
    `                         Press enter to start the ${Colors.FgRed}fights${Colors.Reset}...`
  );
}

function linkCombatMonster(): void {
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

function linkCombatBoss(): void {
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

function printvaluesmonster(hpmonstre: number, hplink: number, round: number): void {
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

function printvaluesboss(hpmonstre: number, hplink: number, round: number): void {
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

function toBoss(): void {
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
    console.log(`${Colors.Reset}You encounter a ${Colors.FgRed}Bokoblin${Colors.Reset}`);

    linkCombatMonster();
    hpmonstre = jsonMonster.hp;
  }
  linkCombatBoss();
}

toBoss();
