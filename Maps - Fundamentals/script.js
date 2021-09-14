"use strict";
const openingHours = {
  thu: {
    open: 22,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};
const restaurant = {
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here's your delicious pasta with ${ing1}, ${ing2}, ${ing3}.`);
  },
};

// Start here <----------

/* In JavaScript, a Map is a Data Structure that we can use
to map values to KEYS.
Just like in objects, data is stored in key/value pairs in maps.

The big difference between objects and maps is that in maps
the KEYS CAN HAVE ANY TYPES, and this can be huge, it can
even be objects, arrays, maps, every kind of types.

In objects, the keys is almost always strings.
*/

/* 1ª FORMA de criar um mapa */

// Primeiro, criamos um mapa sem passar nenhum dado:
const rest = new Map();
// Depois, para colocar itens, usamos o método .set().
// Dentro do construtor, passamos 2 argumentos: 1º key, 2º value:
rest.set("name", "Classico Italiano");
rest.set(1, "Firensem Italy");
rest.set(2, "São Paulo, Brasil");
console.log(rest);
/* Console: (Note que podemos colocar qualquer type)
    Map(3) {'name' => 'Classico Italiano', 1 => 'Firensem Italy', 2 => 'São Paulo, Brasil'}
      [[Entries]]
        0: {"name" => "Classico Italiano"}
        1: {1 => "Firensem Italy"}
        2: {2 => "São Paulo, Brasil"}
*/
//-----------------------------------------------------
console.log("");
// Chamar o método .set desta forma, não apenas faz o update
// do mapa como também retorna o mapa, por ex:
console.log(rest.set("cidade", "Lisbon, Portugal"));
/* Console:
    Map(4) {'name' => 'Classico Italiano', 1 => 'Firensem Italy', 2 => 'São Paulo, Brasil', 3 => 'Lisbon, Portugal'}
      [[Entries]]
        0: {"name" => "Classico Italiano"}
        1: {1 => "Firensem Italy"}
        2: {2 => "São Paulo, Brasil"}
        3: {"Cidade" => "Lisbon, Portugal"}
*/
console.log("");
//-----------------------------------------------------
// Essa possibilidade de retornar o mapa faz com que
// possamos criar uma corrente utilizando o set:
rest
  .set("categories", [
    "Focaccia",
    "Bruschetta",
    "Garlic Bread",
    "Caprese Salad",
  ])
  .set("carros", ["Maverick", "Gol", "Vectra"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");
console.log(rest);
/* Console:
    Map(10) {'name' => 'Classico Italiano', 1 => 'Firensem Italy', 2 => 'São Paulo, Brasil', 'Cidade' => 'Lisbon, Portugal', 'categories' => Array(4), …}
      [[Entries]]
        0: {"name" => "Classico Italiano"}
        1: {1 => "Firensem Italy"}
        2: {2 => "São Paulo, Brasil"}
        3: {"Cidade" => "Lisbon, Portugal"}
        4: {"categories" => Array(4)}
        5: {"Carros" => Array(3)}
        6: {"open" => 11}
        7: {"close" => 23}
        8: {true => "We are open :D"}
        9: {false => "We are closed :("}
*/
console.log("");
//-----------------------------------------------------
// Para poder LER OS DADOS de um mapa, usamos o método GET().
// Basta passarmos como argumento o nome da key:
console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get("carros"));
/* Console:
    script.js:98 Classico Italiano
    script.js:103 We are open :D
    script.js:104 (3) ['Maverick', 'Gol', 'Vectra']
        0: "Maverick"
        1: "Gol"
        2: "Vectra"
        length: 3 
 */
console.log("");
//-----------------------------------------------------
// Vamos fazer um exercício de leve:
/* Bora checar um horário para ver se o restaurante
estará aberto ou fechado.
*/
const time = 10;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
// Aqui nós usamos as keys de cima, checando se o restaurante
// estará aberto entre 11 e 23.
console.log("");

//                       -//-

/* ------------- Outros MÉTODOS usados nos maps
  Já conhecemos o .GET() e o .SET(), mas há outros!!
*/

// Método .HAS() - CHECAR se no mapa há determinada key
console.log(rest.has('categories'));
/* Console:
  true
*/
console.log('');
//-----------------------------------------------------
// Método .DELETE() - Podemos DELETAR um dado do mapa
rest.delete('carros');
console.log(rest);
/* Console:
    Map(9) {'name' => 'Classico Italiano', 1 => 'Firensem Italy', 2 => 'São Paulo, Brasil', 'cidade' => 'Lisbon, Portugal', 'categories' => Array(4), …}
      [[Entries]]
        0: {"name" => "Classico Italiano"}
        1: {1 => "Firensem Italy"}
        2: {2 => "São Paulo, Brasil"}
        3: {"cidade" => "Lisbon, Portugal"}
        4: {"categories" => Array(4)}
        5: {"open" => 11}
        6: {"close" => 23}
        7: {true => "We are open :D"}
        8: {false => "We are closed :("}
*/
console.log('');
//-----------------------------------------------------
// Método .SIZE - Podemos saber o TAMANHO do mapa (não tem construtor)
console.log(rest.size);
/* Console:
  9
*/
console.log('');
//-----------------------------------------------------
// Método .CLEAR - Usamos para LIMPAR os dados do mapa
/*rest.clear();
console.log(rest);
  /* Console:
    Map(0) {}
      [[Entries]]
        No properties
  */
//----------------------------------------------------
// Podemos usar ARRAYS ou OBJECTS como KEYS:
rest.set([1,2], 'Teste');
console.log(rest);
/* Console:
  Map(10) {'name' => 'Classico Italiano', 1 => 'Firensem Italy', 2 => 'São Paulo, Brasil', 'cidade' => 'Lisbon, Portugal', 'categories' => Array(4), …}
    [[Entries]]
      0: {"name" => "Classico Italiano"}
      1: {1 => "Firensem Italy"}
      2: {2 => "São Paulo, Brasil"}
      3: {"cidade" => "Lisbon, Portugal"}
      4: {"categories" => Array(4)}
      5: {"open" => 11}
      6: {"close" => 23}
      7: {true => "We are open :D"}
      8: {false => "We are closed :("}
      9: {Array(2) => "Teste"}
        key: (2) [1, 2]
        value: "Teste"

Obs: É necessário ter cuidado ao usar um array como key,
pois não tem como chamá-lo desta forma: rest.get([1, 2]),
porque por mais que usem a mesma sintaxe, são objetos
diferentes. Para solucionar isso, devemos então colocar
o array dentro de uma variável e então adicioná-la no mapa:
    const variavelMap = [1, 2];
    rest.set(variavelMap, 'Teste');
Desta forma, ao ler 'rest.get(variavelMap)', obtemos
o valor 'Teste' no console.
*/