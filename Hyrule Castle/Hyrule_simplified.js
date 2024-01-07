"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rl = require("readline-sync");
var Colors = {
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
var jsonHero = { name: "Link", hp: 60, str: 15 };
var jsonMonster = { name: "Bokoblin", hp: 30, str: 5 };
var jsonBoss = { name: "Ganon", hp: 150, str: 20 };
var hpmonstre = jsonMonster.hp;
var hplink = jsonHero.hp;
var hpboss = jsonBoss.hp;
var i = 1;
function coeur(hp) {
    var vie = "";
    for (var index = 0; index < hp; index += 1) {
        vie += "❤";
    }
    return vie;
}
function hyrulePrint() {
    console.log("\n                        T h e  H y r u l e  C a s t l e\n                       ______________________________________");
    console.log("\n                           Welcome to the ".concat(Colors.FgGreen, "Hyrule Castle !").concat(Colors.Reset, "\n").concat(Colors.FgMagenta, "The rules are simple.").concat(Colors.Reset, "\nYou have the possibility to have ").concat(Colors.BgGreen, "Heroes").concat(Colors.Reset, " with different ").concat(Colors.FgGreen, "HP").concat(Colors.Reset, " and ").concat(Colors.FgYellow, "STR").concat(Colors.Reset, "\nYour mission is to ").concat(Colors.BgRed, "kill monsters").concat(Colors.Reset, " until you reach ").concat(Colors.FgYellow, "Fight 10").concat(Colors.Reset, " then you have to face the ").concat(Colors.BgRed, "Boss.").concat(Colors.Reset, "\n"));
    rl.question("                         Press enter to start the ".concat(Colors.FgRed, "fights").concat(Colors.Reset, "..."));
}
function linkCombatMonster() {
    while (hpmonstre > 0 && hplink > 0) {
        i += 1;
        console.clear();
        printvaluesmonster(hpmonstre, hplink, i);
        var answer = rl.question("[1] Attack   [2] Heal : ");
        hplink -= jsonMonster.str;
        if (answer === "1") {
            hpmonstre -= jsonHero.str;
        }
        else if (answer === "2") {
            if (hplink >= jsonHero.hp / 2) {
                hplink = jsonHero.hp;
            }
            else {
                hplink += jsonHero.hp / 2;
            }
        }
        else {
            console.log("".concat(Colors.Reset, "\nOUPS...You missed your ").concat(Colors.FgGreen, "turn").concat(Colors.Reset, "\n"));
        }
        if (hpmonstre <= 0) {
            console.log("Bokoblin ".concat(Colors.FgRed, "is dead"));
        }
        else if (hplink < 1) {
            console.log("".concat(Colors.FgRed, "G A M E  O V E R").concat(Colors.Reset, " \uD83D\uDE08 ").concat(Colors.FgYellow, "you have been slayed by a damned Bokoblin !").concat(Colors.Reset));
            process.exit(1);
        }
        console.clear();
    }
}
function linkCombatBoss() {
    while (hpboss > 0 && hplink > 0) {
        i += 1;
        printvaluesboss(hpboss, hplink, i);
        var answer = rl.question("[1] Attack   [2] Heal : ");
        hplink -= jsonBoss.str;
        if (answer === "1") {
            hpboss -= jsonHero.str;
            console.clear();
        }
        else if (answer === "2") {
            if (hplink >= jsonHero.hp / 2) {
                hplink = jsonHero.hp;
            }
            else {
                hplink += jsonHero.hp / 2;
            }
        }
        else {
            console.log("".concat(Colors.Reset, "\nOUPS...You missed your ").concat(Colors.FgGreen, "turn").concat(Colors.Reset, "\n"));
        }
        if (hpboss <= 0) {
            console.log("".concat(Colors.FgGreen, "Y O U  W O N !").concat(Colors.Reset));
            console.log("G a n o n".concat(Colors.FgRed, " I s  D e a d"));
        }
        else if (hplink < 1) {
            console.log("".concat(Colors.FgRed, "G A M E  O V E R").concat(Colors.Reset, " \uD83D\uDE08 ").concat(Colors.FgYellow, "you have been slayed by G O R O N !").concat(Colors.Reset));
            process.exit(1);
        }
        console.clear();
    }
}
function printvaluesmonster(hpmonstre, hplink, round) {
    console.log("\n       ".concat(Colors.FgBlue, "========= ").concat(Colors.FgRed, "ROUND ").concat([round]).concat(Colors.FgBlue, " =========\n"));
    console.log(Colors.FgRed, jsonMonster.name, Colors.Reset);
    console.log("HP: ".concat(Colors.FgRed).concat(coeur(hpmonstre), " ").concat(hpmonstre, " ").concat(Colors.Reset, "/ 30"));
    console.log(Colors.FgGreen, jsonHero.name, Colors.Reset);
    console.log("HP: ".concat(Colors.FgGreen).concat(coeur(hplink), " ").concat(hplink, " ").concat(Colors.Reset, "/ 60"));
    console.log("\n       ".concat(Colors.FgBlue, "=========").concat(Colors.Reset, " OPTIONS ").concat(Colors.Reset).concat(Colors.FgBlue, " =========\n"));
}
function printvaluesboss(hpmonstre, hplink, round) {
    console.log("\n       ========= ".concat(Colors.FgRed, "ROUND ").concat([round]).concat(Colors.Reset, " =========\n"));
    console.log(Colors.FgRed, jsonBoss.name, Colors.Reset);
    console.log("HP: ".concat(Colors.FgRed).concat(coeur(hpmonstre), " ").concat(hpmonstre, " ").concat(Colors.Reset, "/ 150"));
    console.log(Colors.FgGreen, jsonHero.name, Colors.Reset);
    console.log("HP: ".concat(Colors.FgGreen).concat(coeur(hplink), " ").concat(hplink, " ").concat(Colors.Reset, "/ 60"));
    console.log("\n       ".concat(Colors.FgBlue, "=========").concat(Colors.Reset, " OPTIONS ").concat(Colors.Reset).concat(Colors.FgBlue, "=========").concat(Colors.Reset, "\n"));
}
function toBoss() {
    hyrulePrint();
    for (var index = 1; index <= 9; index += 1) {
        console.clear();
        console.log("\n                                   ========= ".concat(Colors.FgYellow, "FIGHT ").concat(index).concat(Colors.Reset, " ========="));
        console.log("\n       ========= ".concat(Colors.FgRed, "ROUND ").concat(index).concat(Colors.Reset, " =========\n"));
        console.log(index);
        console.log(Colors.FgRed, jsonMonster.name, Colors.Reset);
        console.log("HP: ".concat(Colors.FgRed).concat(coeur(hpmonstre), " ").concat(hpmonstre, " ").concat(Colors.Reset, "/ 30"));
        console.log(Colors.FgGreen, jsonHero.name, Colors.Reset);
        console.log("HP: ".concat(Colors.FgGreen).concat(coeur(hplink), " ").concat(hplink, " ").concat(Colors.Reset, "/ 60"));
        console.log("\n       ".concat(Colors.FgBlue, "=========").concat(Colors.Reset, " OPTIONS ").concat(Colors.Reset).concat(Colors.FgBlue, "=========\n"));
        var answer = rl.question("[1] Attack   [2] Heal : ");
        if (answer === "1") {
            hpmonstre -= 15;
        }
        else if (answer === "2") {
            if (hplink >= jsonHero.hp / 2) {
                hplink = jsonHero.hp;
            }
            else {
                hplink += jsonHero.hp / 2;
            }
        }
        hplink -= 5;
        console.log("".concat(Colors.Reset, "You encounter a ").concat(Colors.FgRed, "Bokoblin").concat(Colors.Reset));
        linkCombatMonster();
        hpmonstre = jsonMonster.hp;
    }
    linkCombatBoss();
}
toBoss();
