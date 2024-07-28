function ticketInformation() {
    const departureCity = localStorage.getItem('departureCity');
    const arrivalCity = localStorage.getItem('arrivalCity');
    const busService = localStorage.getItem('busService');
    const date = localStorage.getItem('date');
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');
    const email = localStorage.getItem('email');
    const gender = localStorage.getItem('gender');
    const age = localStorage.getItem('age');
    const departureTime = localStorage.getItem('departureTime');

    document.getElementById('departureCity').textContent = departureCity;
    document.getElementById('arrivalCity').textContent = arrivalCity;
    document.getElementById('busService').textContent = busService;
    document.getElementById('date').textContent = date;
    document.getElementById('firstName').textContent = firstName;
    document.getElementById('lastName').textContent = lastName;
    document.getElementById('email').textContent = email;
    document.getElementById('gender').textContent = gender;
    document.getElementById('age').textContent = age;
    document.getElementById('departureTime').textContent = departureTime;
}

function goBack() {
    window.location.href = "index.html";
   
}