const submitButton = document.getElementById('submit');
const randomButton = document.getElementById('randombutton');
const outputDiv = document.getElementById('output');
let lastIndex = -1

document.getElementById('formdest').addEventListener('submit', formSubmissions);

function formSubmissions(event){
    event.preventDefault();
    const date = document.getElementById('date').value;
    const location = document.getElementById('travel-location').value;
    const description = document.getElementById('form-description').value;

    if (!date || !location || !description){
        alert("Please fill in all fields.");
        return;
    } 
    const formData = {
        date: date,
        location: location,
        description: description,
    };
    saveToLocalStorage(formData);
}
    // redirectPage(''); for when the second page is created


function saveToLocalStorage(formData){
    const destForm = JSON.parse(localStorage.getItem('destForm')) || [];
    destForm.push(formData);
    localStorage.setItem('destForm', JSON.stringify(destForm));
}


// function to randomly select from the form local storage
randomButton.addEventListener('click', function(){
    const destForm =JSON.parse(localStorage.getItem('destForm')) || [];
    getRandomDestination(destForm);
})

function getRandomDestination(destForm){
    if (destForm.length === 0){
        outputDiv.textContent = "No Destinations available.";
        console.log("No destinations available.");
        return;
    } let randomIndex; do {
        randomIndex = Math.floor(Math.random() * destForm.length);
    } while (randomIndex === lastIndex);

    lastIndex = randomIndex

    const randomDestination = destForm[randomIndex];

    if (!randomDestination) {
        outputDiv.textContent = "No valid destination found."
        console.log('No valid destination found.');
        return;
    }
    document.getElementById('destination-name').innerText = randomDestination.location;
    document.getElementById('destination-dates').innerText = randomDestination.date;
    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
    myModal.show();

    outputDiv.innerHTML = `Random Destination: <strong>${randomDestination.location}</strong><br>
    Date: <strong>${randomDestination.date}</strong><br>
    Description: <strong>${randomDestination.description}</strong><br>`

    console.log(`Random Destination: ${randomDestination.location} ${randomDestination.date} ${randomDestination.description}`);
}