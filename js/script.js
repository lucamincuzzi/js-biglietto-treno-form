alert("Salve, gentile viaggiatore!");

// Raccolta dati
document.getElementById("send").addEventListener("click", function () {
  let kmNumberElem = document.getElementById("km");
  const kmNumber = parseInt(kmNumberElem.value);
  if (kmNumber > 0) {
  } else {
    alert("Inserire un numero positivo");
    kmNumber = null;
  }
  console.log(kmNumber, typeof kmNumber);
  let travelerAgeElem = document.getElementById("age");
  const travelerAge = parseInt(travelerAgeElem.value);
  if (travelerAge > 0 && travelerAge < 100) {
  } else {
    alert("Inserire un dato valido");
    travelerAge = null;
  }
  console.log(travelerAge, typeof travelerAge);

  // Logica del programma
  let ticketPrice = kmNumber * 0.21;
  if (travelerAge >= 18 && travelerAge <= 64) {
    console.log(ticketPrice, typeof ticketPrice);
  } else if (travelerAge < 18) {
    ticketPrice = (ticketPrice / 100) * 80;
    console.log(ticketPrice, typeof ticketPrice);
  } else if (travelerAge >= 65) {
    ticketPrice = (ticketPrice / 100) * 60;
  }
  ticketPriceResult = ticketPrice.toFixed(2);
  console.log(ticketPriceResult, typeof ticketPriceResult);

  message = `il prezzo del tuo biglietto è di ${ticketPriceResult}€, buon viaggio!`;

  // Output
  console.log(message);
});
