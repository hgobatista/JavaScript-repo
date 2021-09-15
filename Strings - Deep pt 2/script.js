"Use strict";

/*  Deixaremos de lado o restaurante e agora partiremos
para uma empresa de transportes aéreos! */

const airline = "TAP Air Portugal";
const plane = "A320";

//-----------------------------------------------------
// Mudar MAIÚSCULA e MINÚSCULA
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log("Hugo".toLowerCase());
/* Console:
    tap air portugal
    TAP AIR PORTUGAL
    hugo
*/
console.log("");
//-----------------------------------------------------
// Arrumando a CAPITALIZAÇÃO de um nome:
let passengerLower;
let passengerCorrect;
const passengerNameCorrect = function (passenger) {
  passengerLower = passenger.toLowerCase();
  passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
  console.log(passengerCorrect);
};
passengerNameCorrect("FabioLA");

console.log("");
//-----------------------------------------------------
/*                      ~//~                       */

// Checando se o usuário digitou o email corretamente:
const email = "contato@hugobatista.com";
const loginEmail = " Contato@hugoBatista.com";

console.log("");
//-----------------------------------------------------
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

console.log("");
//-----------------------------------------------------
// Podemos fazer isso tudo em apenas um passo:
const normallizedEmail = loginEmail.toLowerCase().trim();
console.log(normallizedEmail);
console.log(email === normallizedEmail);

console.log("");
//-----------------------------------------------------

/*                      ~//~                       */

// Uma das coisas mais IMPORTANTES <===================
// SUBSTITUIR partes de umas STRING (REPLACE)
const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);
/* Console:
  288.97$
*/
const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";
console.log(announcement.replace("door", "gate"));
/* Console:
  All passengers come to boarding gate 23. Boarding door 23!
  (Note que mudou apenas a primeira 'door', a segunda
  permaneceu do mesmo jeito que no começo. Há duas formas
  de corrigir isso:)
*/
//-----------------------------------------------------
// REPLACE ALL (Muito nova ainda):
console.log(announcement.replaceAll("door", "gate"));

// Esta forma seria a ideal, porém ainda é muito nova
// e não funciona muito bem.

//-----------------------------------------------------
// REGULAR EXPRESSION (Muito nova ainda):
/* A segunda forma é usando uma expressão regular,
para dizer ao método replace que ele deve agir em
todas as ocorrências, e não apenas na primeira. */
console.log(announcement.replace(/door/g, "gate"));
/* Console:
  All passengers come to boarding gate 23. Boarding gate 23!
*/
console.log("");
//-----------------------------------------------------
// BOOLEANS:
const planeB = "Airbus A320neo";
console.log(planeB.includes("A320"));
console.log(planeB.includes("Boeing"));
console.log(planeB.startsWith("Air"));
/* Console:
  true
  false
  true
  Part of the NEW AirBus family
*/
if (planeB.startsWith("Airbus") && planeB.endsWith("neo")) {
  console.log("Part of the NEW AirBus family");
}

console.log("");
//-----------------------------------------------------
// Exercícios práticos:

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are not allowed to board 💩");
  } else {
    console.log("Welcome to board! 🐱‍🏍✌");
  }
};
checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("I have some socks and camera");
checkBaggage("Got some snacks and a gun for protection");
