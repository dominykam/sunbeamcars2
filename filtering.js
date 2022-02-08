// Bind javascript to the html element with the id "form"
const filteringForm = document.getElementById("form");

const carlist = [
    {
        name: "SUZUKI SWIFT",
        category: "Category: Budget",
        persons: "Persons: 4",
        suitcases: "Suitcases: 1",
        image: "images/suzuki.png"
       
    },
    {
        name: "MAZDA 3",
        category: "Category: Standard",
        persons: "Persons: 5",
        suitcases: "Suitcases: 3",
        image:"images/mazda.png"
    },
    {
        name: "CITROEN GRAND C4 PICASSO",
        category: "Category: Minivan",
        persons: "Persons: 7",
       suitcases: "Suitcases: 4",
       image="images/citroen.png"
 }

];






// Event handler that is triggered when user clicks on submit button
filteringForm.addEventListener("submit", function (e) {
	e.preventDefault();

	// Bind javascript to the html element with the id "output"
	const carsSection = document.getElementById("cars");
	const numberInputField = document.getElementById("num-persons"); //numberInputField can be called const whatever = sth sth;
	const userInput = Number(numberInputField.value); // With Number() we are converting the string "5" into the number 5
	
	
	
	// Create an object list of elements with the class "cars" attached
	let outputString = "";
	for (const car of carslist) {

		if (car.Persons >= userInput) {
			// & car.Suitcases == suitcasesInput   
			const whatever = `<div class="${car.cssClass}-car">
            <img class="car-one-logo" id="car-one-logo" src="${car.image}"/>
            <p class="car-name">${car.name}</p>
            <div>
            <p>Category: ${car.category}</p>
            <p>Persons: ${car.persons}</p>
            <p>Suitcases: ${car.suitcases}</p>
            </div>
            <div>
            <p>Price: kr. ${car.price}</p>
            <button class="book-car-btn">Book Now</button>
            </div>
            </div>
            `;
			outputString = outputString + whatever;
		}
	}

	// Clear output area
	carsSection.innerHTML = outputString;
	// Setting output to nothing "
}); // Do not reload after submit button is pressed


