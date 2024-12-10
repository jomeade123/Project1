const randomButton = document.getElementById('random');
// function to randomly select from the form local storage
function getRandomDestination(destination){
    if (destination.length === 0){
        console.log("No destinations available.")
        return;
    }
    const randomIndex = Math.floor(Math.random() * destination.length);

    const randomDestination = destination[randomIndex];
    console.log(`Random Destination: ${randomDestination.location} ${randomDestination.date} ${randomDestination.content}`)
}