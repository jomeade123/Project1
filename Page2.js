const vacationContainer = document.querySelector('#vacation-container')

function renderDestinations(){
    const storedData = JSON.parse(localStorage.getItem('destForm')) || [];
    console.log(storedData);
    if (storedData && storedData.length > 0){
        storedData.forEach(post => {
            const postForm = document.createElement('div');
            postForm.classList.add('row')
            postForm.innerHTML = `    
            <div class="col-6 offset-md-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${post.location} - ${post.date}</h5>
                        <p class="card-text">${post.description}</p>
                    </div>
                </div>
            </div>
           `;
            vacationContainer.appendChild(postForm);
        });            
    } 
}
renderDestinations();