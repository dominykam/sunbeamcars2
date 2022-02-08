const output = document.getElementById("output");

let template = "";

for (const car of carlist) {

    template = `
   
        <div class="flex-container">
        <section>
            <img src="${car.image}" alt="Suzuki" class="carimg">
            <p class="info">${car.category} <br> Person:${car.persons} <br> ${car.suitcases} </p>
            <h3 class="price">${car.price} </h3>
            <button class="button">Book now </button>
            <section>
  </div>`

    
    // Show template content in output div
    output.insertAdjacentHTML("beforeend", template)

}

const form = document.getElementById("form");

// Event handler that is triggered when user clicks on submit button
filteringForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Do not reload after submit button is pressed
    error.innerHTML="";


    // Create an object list of elements with the class "ilist" attached
    const radiobuttonlist = document.getElementsByClassName("ilist");

    // Bind javascript to the html element with the id "output"
    const output = document.getElementById("output");

    // Clear output area
    output.innerHTML = ""; // Setting output to nothing ""


    if (car.persons=5, car.suitcases=2 ) {
        output.insertAdjacentHTML = car.name + car.image + car.category ;
    } else if (car.persons=6, car.suitcases=4 ) {
       output.insertAdjacentHTML= car.name + car.image + car.category ;
      
    } else (car.persons=3, car.suitcases=0 ) {
        output.insertAdjacentHTML=car.name + car.image + car.category;
}
    
    


        
    
    const arrival = document.getElementById("arrivalfield");
    const departure = document.getElementById("departurefield");
    
    const form = document.getElementById("form");
    
    const error = document.getElementById("error");
    
    
    //FILTERING
    form.addEventListener("submit", function (e) {
        e.preventDefault();
    
        const peopleInput = parseFloat(document.getElementById("peoplefield").value);
        const suitcaseInput = parseFloat(document.getElementById("suitcasefield").value);
        const output = document.getElementById("output");
    
        let carOutput = "";
        for (const car of carlist) {

};

        