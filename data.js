


const output = document.getElementById("output");


//Filtering

const arrival = document.getElementById("arrivalfield");
const departure = document.getElementById("departurefield");

const peopleInput = parseFloat(document.getElementById("peopleinput").value);
const suitcaseInput = parseFloat(document.getElementById("suitcaseinput").value);

const form = document.getElementById("form");

const error = document.getElementById("error");

function validDates(arrivalfield, departurefield) {
    const arrival = new Date(arrivalfield);
    const departure = new Date(departurefield);
    if (arrival > departure) {
        return false;
    } else { 
        return true;
    }
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    error.innerHTML = "";

    let template = "";

for (const car of carlist) {
    
    template = `

    <div class="flex-container">
        <div>
            <img src="${car.image}" alt="budget-car">
        </div>
        <h2>${car.name}</h2>
         <div>
            <p>Category: ${car.category}</p>
            <p>Persons: ${car.persons}</p>
            <p> Suitcases: ${car.suitcases}</p>
        </div>
    </div>`
    output.insertAdjacentHTML (`beforeend`, template)
    
    if (peopleInput <= 4 & suitcaseInput <= 0) {
        output.insertAdjacentHTML (`beforeend`, template);



    }
}
})

