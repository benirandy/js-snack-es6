// SNACK 1
// creare un array di oggetti bici
const bikes = [
    { nome: 'Bianchi', peso: 8.3 },
    { nome: 'Specialized', peso: 7.6 },
    { nome: 'Trek', peso: 7.8 },
    { nome: 'Cannondale', peso: 8.1 },
  ];
  
  // trovare la bici con il peso minore usando la destructuring
  let biciLeggera = bikes[0];
  for (let i = 1; i < bikes.length; i++) {
    const { peso } = bikes[i];
    if (peso < biciLeggera.peso) {
      biciLeggera = bikes[i];
    }
  }
  
  // stampare a schermo la bici con il peso minore usando il template literal
  console.log(`La bici più leggera è la ${biciLeggera.nome} che pesa ${biciLeggera.peso} kg.`);
  

// SNACK 2
// Creare un array di oggetti squadra di calcio
const soccerTeams = [
    { name: "Juventus", points: Math.floor(Math.random() * 50), fouls: Math.floor(Math.random() * 50) },
    { name: "Inter", points: Math.floor(Math.random() * 50), fouls: Math.floor(Math.random() * 50) },
    { name: "Milan", points: Math.floor(Math.random() * 50), fouls: Math.floor(Math.random() * 50) },
    { name: "Roma", points: Math.floor(Math.random() * 50), fouls: Math.floor(Math.random() * 50) },
    { name: "Napoli", points: Math.floor(Math.random() * 50), fouls: Math.floor(Math.random() * 50) },
];

// Creare un nuovo array con nomi e falli subiti usando destructuring
const teamFouls = soccerTeams.map(({ name, fouls }) => ({ name, fouls }));
console.log(teamFouls);
console.log(soccerTeams);

// SNACK 3 - Soluzione con filter
function filterArray(arr, a, b) {
    return arr.filter((element, index) => index >= a && index <= b);
}

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArray = filterArray(myArray, 2, 5);
console.log(newArray); // Output: [3, 4, 5, 6]


// SNACK 3 - Soluzione con forEach
function filterArray(arr, a, b) {
    const newArr = [];
    arr.forEach((element, index) => {
        if (index >= a && index <= b) {
            newArr.push(element);
        }
    });
    return newArr;
}

