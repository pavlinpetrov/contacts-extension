const list = document.querySelector('#contacts');
const req = new Request('http://localhost:3000/api/contacts/', {
    method: 'GET',
    headers: {
        "Content-Type": "application/json"
    }
});

let listMarkup = '';

fetch(req)
    .then(res => res.json())
    .then(data => {
        console.log(data.result);
        
        data.result.forEach(contact => {
            const { firstName, lastName, email } = contact;
        
            listMarkup += `
                <li>
                    <div class="name">${firstName} ${lastName}</div>
        
                    <a href="mailto:${email}" class="email" target="_self">${email}</a>
                </li>
            `;
        });

        list.innerHTML = listMarkup;
    });

list.addEventListener('click', event => {
    if (event.target.classList.contains('email')) {
        chrome.tabs.update({
            url: event.target.href
        });
    }
});