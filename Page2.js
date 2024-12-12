// need ID on page 2
const (finishForms) = document.getElementById('') 

function noForms(){
    // need ID on page 2
    const finishForms = document.getElementById('')
    // need ID on page 2
    .innerHTML= '<p>No Reccomendations yet...</p>' 
}

function renderDestinations(){
    const storedData = JSON.parse(localStorage.getItem('storedData')) || [];
    article.innerHTML = '';
    if (storedData.length === 0){
        noForms();
    } else {
        storedData.array.forEach(post => {
            const postForm = document.createElement('div');
            postForm.classList.add('')
            postForm.innerHTML = `
            <h2>${post.location}</h2>
            <p>${post.date}</p>
            <p>${post.description}`
            storedData.appendChild(postForm);
        });
    }
}