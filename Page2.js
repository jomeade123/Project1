const vacationContainer = document.querySelector('#vacation-container')

function renderDestinations() {
    const storedData = JSON.parse(localStorage.getItem('destForm')) || [];
    console.log(storedData);
    if (storedData && storedData.length > 0) {
        storedData.forEach(post => {
            const boxContainer = document.createElement('div');
            boxContainer.classList.add('box');
            const postForm = document.createElement('div');
            postForm.classList.add('row')
            postForm.innerHTML = `    
           <div class="card-body">
                <h5 class="card-title">${post.location}</h5>
                <h5 class="card-subtitle mb-2 text-body-secondary">${post.date}</h5>
                <p class="card-text">${post.description}</p>
            </div>
           `;
           boxContainer.appendChild(postForm);
            vacationContainer.appendChild(boxContainer);
        });
    }
}
renderDestinations(); 
