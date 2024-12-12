const submitButton = document.getElementById('submit');

document.getElementById('formdest').addEventListener('submit', formSubmissions);

function formSubmissions(event){
    event.preventDefault();
    const date = document.getElementById('date').value;
    const location = document.getElementById('trav location').value;
    const description = document.getElementById('form description').value;
}

if (!date || !trav location || !form description){
    const formData = {
        date: date,
        location: location,
        description; form description,
    };
    saveToLocalStorage(formData);
    // redirectPage(''); for when the second page is created
}

function saveToLocalStorage(formData){
    const destForm = JSON.parse(localStorage.getItem('destForm')) || [];
    destForm.push(formData)
    localStorage.setItem('destForm', JSON.stringify(destForm));
}


// function to randomly select from the form local storage
const randomButton = document.getElementById('random');

function getRandomDestination(destination){
    if (destination.length === 0){
        console.log("No destinations available.")
        return;
    }
    const randomIndex = Math.floor(Math.random() * destination.length);

    const randomDestination = destination[randomIndex];
    console.log(`Random Destination: ${randomDestination.location} ${randomDestination.date} ${randomDestination.content}`)
}