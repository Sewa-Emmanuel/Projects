var fs = require("fs");
var rl = require("readline-sync");
var Reset = "\x1b[0m";
var FgRed = "\x1b[31m";
var FgGreen = "\x1b[32m";
var FgBlue = "\x1b[34m";
var FgYellow = "\x1b[33m";
var FgMagenta = "\x1b[35m";
var BgRed = "\x1b[41m";
var BgGreen = "\x1b[42m";
var BgYellow = "\x1b[43m";
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
    console.log("\n                           Welcome to the ".concat(FgGreen, "Hyrule Castle !").concat(Reset, "\n").concat(FgMagenta, "The rules are simple.").concat(Reset, "\nYou have the possibility to have ").concat(BgGreen, "Heroes").concat(Reset, " with different ").concat(FgGreen, "HP").concat(Reset, " and ").concat(FgYellow, "STR").concat(Reset, "\nYour mission is to ").concat(BgRed, "kill monsters").concat(Reset, " until you reach ").concat(FgYellow, "Fight 10").concat(Reset, " then you have to face the ").concat(BgRed, "Boss.").concat(Reset, "\n"));
    rl.question("                         Press enter to start the ".concat(FgRed, "fights").concat(Reset, "..."));
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
            console.log("".concat(Reset, "\nOUPS...You missed your ").concat(FgGreen, "turn").concat(Reset, "\n"));
        }
        if (hpmonstre <= 0) {
            console.log("Bokoblin ".concat(FgRed, "is dead"));
        }
        else if (hplink < 1) {
            console.log("".concat(FgRed, "G A M E  O V E R").concat(Reset, " \uD83D\uDE08 ").concat(FgYellow, "you have been slayed by a damned Bokoblin !").concat(Reset));
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
            console.log("".concat(Reset, "\nOUPS...You missed your ").concat(FgGreen, "turn").concat(Reset, "\n"));
        }
        if (hpboss <= 0) {
            console.log("".concat(FgGreen, "Y O U  W O N !").concat(Reset));
            console.log("G a n o n".concat(FgRed, " I s  D e a d"));
        }
        else if (hplink < 1) {
            console.log("".concat(FgRed, "G A M E  O V E R").concat(Reset, " \uD83D\uDE08 ").concat(FgYellow, "you have been slayed by G O R O N !").concat(Reset));
            process.exit(1);
        }
        console.clear();
    }
}
function printvaluesmonster(hpmonstre, hplink, round) {
    console.log("\n       ".concat(FgBlue, "========= ").concat(FgRed, "ROUND ").concat([round]).concat(FgBlue, " =========\n"));
    console.log(FgRed, jsonMonster.name, Reset);
    console.log("HP: ".concat(FgRed).concat(coeur(hpmonstre), " ").concat(hpmonstre, " ").concat(Reset, "/ 30"));
    console.log(FgGreen, jsonHero.name, Reset);
    console.log("HP: ".concat(FgGreen).concat(coeur(hplink), " ").concat(hplink, " ").concat(Reset, "/ 60"));
    console.log("\n       ".concat(FgBlue, "=========").concat(Reset, " OPTIONS ").concat(Reset).concat(FgBlue, " =========\n"));
}
function printvaluesboss(hpmonstre, hplink, round) {
    console.log("\n       ========= ".concat(FgRed, "ROUND ").concat([round]).concat(Reset, " =========\n"));
    console.log(FgRed, jsonBoss.name, Reset);
    console.log("HP: ".concat(FgRed).concat(coeur(hpmonstre), " ").concat(hpmonstre, " ").concat(Reset, "/ 150"));
    console.log(FgGreen, jsonHero.name, Reset);
    console.log("HP: ".concat(FgGreen).concat(coeur(hplink), " ").concat(hplink, " ").concat(Reset, "/ 60"));
    console.log("\n       ".concat(FgBlue, "=========").concat(Reset, " OPTIONS ").concat(Reset).concat(FgBlue, "=========").concat(Reset, "\n"));
}
function toBoss() {
    hyrulePrint();
    for (var index = 1; index <= 9; index += 1) {
        console.clear();
        console.log("\n                                   ========= ".concat(FgYellow, "FIGHT ").concat(index).concat(Reset, " ========="));
        console.log("\n       ========= ".concat(FgRed, "ROUND ").concat(index).concat(Reset, " =========\n"));
        console.log(index);
        console.log(FgRed, jsonMonster.name, Reset);
        console.log("HP: ".concat(FgRed).concat(coeur(hpmonstre), " ").concat(hpmonstre, " ").concat(Reset, "/ 30"));
        console.log(FgGreen, jsonHero.name, Reset);
        console.log("HP: ".concat(FgGreen).concat(coeur(hplink), " ").concat(hplink, " ").concat(Reset, "/ 60"));
        console.log("\n       ".concat(FgBlue, "=========").concat(Reset, " OPTIONS ").concat(Reset).concat(FgBlue, "=========\n"));
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
        console.log("".concat(Reset, "You encounter a ").concat(FgRed, "Bokoblin").concat(Reset));
        linkCombatMonster();
        hpmonstre = jsonMonster.hp;
    }
    linkCombatBoss();
}
toBoss();
