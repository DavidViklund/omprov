// 8. Uppdatera bilinformation (3p)
// Skriv en funktion updateCarInfo som tar ett bilobjekt
// och returnerar en kopia av objektet med uppdaterad information.
// Funktionen ska tillåta att användaren skickar in ny information
// för namn, modell och hastighet för bilen. Om någon av dessa
// värden finns med som parameter, ska de ersätta de befintliga värdena i objektet.

const car = {
  name: "Tesla",
  model: "Model S",
  speed: 150,
};

function updateCarInfo(carObject, name, model, speed) {
  const updateCar = { ...car };
  const updateCarInfo = {
    ...car,
    name: "Polar",
    model: "Norhtstar",
    speed: 190,
  };
  return newCar;
}

console.log(updateCarInfo);
//*

// 8. Uppdatera bilinformation (3p)
// Skriv en funktion updateCarInfo som tar ett bilobjekt
// och returnerar en kopia av objektet med uppdaterad information.
// Funktionen ska tillåta att användaren skickar in ny information
// för namn, modell och hastighet för bilen. Om någon av dessa
// värden finns med som parameter, ska de ersätta de befintliga värdena i objektet.
/*
const car = {
  name: "Tesla",
  model: "Model S",
  speed: 150,
};

function updateCarInfo(carObject, newName, newModel, newSpeed) {
  // Din kod här
}

const car = {
  name: "Tesla",
  model: "Model S",
  speed: 150,
};

function updateCarInfo(carObject, newName, newModel, newSpeed) {
  const updateCar = { ...car };
  const updateCarInfo = {
    ...car,
    newName: "Polar",
    newModel: "Norhtstar",
    newSpeed: 190,
  };
  return newCar;
}

console.log(updateCarInfo);
*/
