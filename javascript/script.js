function header() {
    console.log("yippie, it works !!");
    const data = {
        "name": {
            "first": "Gabriela",
            "last": "Moniz",
        },
        "homeCountry": "Brazil",
    }
    const fullName = `${data.name.first} ${data["name"]["last"]}`
    const homeCountry = data.homeCountry;

    const headerElement = document.getElementById("header");
    headerElement.querySelector(".main-title").textContent = "Bus Ticket Booking App";
    headerElement.querySelector(".author").textContent = ` by ${fullName} from ${homeCountry}`;
}

function updateArrivalOptions() {
    const departureCity = document.getElementById("departureCity").value;
    const arrivalCity = document.getElementById("arrivalCity");
  
    for (let i = 0; i < arrivalCity.options.length; i++) {
      const option = arrivalCity.options[i];
      if (option.value === departureCity && departureCity !== "") {
        option.disabled = true;
      } else {
        option.disabled = false;
      }
    }
  }
  
  function updateDepartureOptions() {
    const arrivalCity = document.getElementById("arrivalCity").value;
    const departureCity = document.getElementById("departureCity");
  
    for (let i = 0; i < departureCity.options.length; i++) {
      const option = departureCity.options[i];
      if (option.value === arrivalCity && arrivalCity !== "") {
        option.disabled = true;
      } else {
        option.disabled = false;
      }
    }
  }
  

function incrementNumOfTickets() {
    const numOfTicketsInput = document.getElementById("numOftickets");
    let currentValue = parseInt(numOfTicketsInput.value);

    if (isNaN(currentValue)) {
        currentValue = 0;
    }

    if (currentValue < 10) {
        numOfTicketsInput.value = currentValue + 1;
    }
    console.log("Increment NumOfTickets function called!");
}

function decrementNumOfTickets() {
    const numOfTicketsInput = document.getElementById("numOftickets");
    let currentValue = parseInt(numOfTicketsInput.value);

    if (isNaN(currentValue)) {
        currentValue = 0;
    }

    if (currentValue > 0) {
        numOfTicketsInput.value = currentValue - 1;
    }
    console.log("Decrement NumOfTickets function called!");
}

function selectDeptime(button) {
    const departureTimeButtons = document.querySelectorAll(".departureTime");
    departureTimeButtons.forEach(function (departureTimeButton) {
        departureTimeButton.classList.remove("button-active");
        console.log("Select departure time button function called!");
    });

    button.classList.add("button-active");
}

document.getElementById("age").addEventListener("input", function () {
    const ageInput = document.getElementById("age");
    let ageValue = parseInt(ageInput.value);

    if (ageValue < 18) {
        ageInput.value = 18;
        alert("Age must be at least 18.");
    }
});

function saveData() {
    const departureCity = document.getElementById("departureCity").value;
    const arrivalCity = document.getElementById("arrivalCity").value;
    const date = document.getElementById("calendar").value;
    const numOfTickets = parseInt(document.getElementById("numOftickets").value);
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const genderElement = document.querySelector('input[name="gender"]:checked');
    const busServiceElement = document.querySelector('input[name="bus-service"]:checked');
    const departureTimeElement = document.querySelector('.departureTime.button-active');
    const age = parseInt(document.getElementById("age").value);

   
    const gender = genderElement ? genderElement.value : "";
    const busService = busServiceElement ? busServiceElement.value : "";
    const departureTime = departureTimeElement ? departureTimeElement.textContent : "";

    
    if (isNaN(numOfTickets) || numOfTickets > 10 || numOfTickets < 1) {
        alert("Please select a valid number of tickets (1-10).");
        return;
    }

    if (isNaN(age) || age < 18) {
        alert("Age must be 18 years or older.");
        return;
    }

    localStorage.setItem("departureCity", departureCity);
    localStorage.setItem("arrivalCity", arrivalCity);
    localStorage.setItem("date", date);
    localStorage.setItem("numOfTickets", numOfTickets);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("gender", gender);
    localStorage.setItem("busService", busService);
    localStorage.setItem("departureTime", departureTime);
    localStorage.setItem("age", age);

    console.log("Saved data function called");
    window.location.href = "ticketInfo.html";
}

function footer() {
    const myLoginName = "Gabriela Moniz";
    const thisYear = "2023";
    const myProgram = "Computer Programming";

    const displayFooter = `&copy; ${myLoginName}  ${thisYear} | My Program: ${myProgram}`;

    document.getElementById("displayFooter").innerHTML = displayFooter;
}