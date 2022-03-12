function ShowTheName() {
    fetch('http://localhost:3000/getUsers/')
        .then((response) => response.json())
        .then((data) => {
            const list = window.document.getElementById('here-comes-the-names')

        data.map((item) => {
            const li = window.document.createElement('li')
            li.innerHTML = item;
            list.appendChild(li);
        })    
    })
}

function ShowTheEmails() {
    fetch('http://localhost:3000/getUserEmails/')
        .then((response) => response.json())
        .then((data) => {
            const list = window.document.getElementById('here-comes-the-emails')

        data.map((item) => {
            const li = window.document.createElement('li')
            li.innerHTML = item;
            list.appendChild(li);
        })    
    })
}