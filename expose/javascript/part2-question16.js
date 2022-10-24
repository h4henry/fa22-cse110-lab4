let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (const prop in statistics) {
	let letter = prop.charAt(0);

  if(letter == "r"){
  	console.log(`${prop} = ${statistics[prop]}`);
  }
  
  else if (((statistics[prop]) % 2) != 0 ) {
    console.log(`${prop} = ${statistics[prop]}`);
  }

}