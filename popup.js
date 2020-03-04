const list = document.querySelector('#contacts');
const contacts =  [
    {
        "firstName": "John",
        "lastName": "Snow",
        "email": "ghost@example.com",
    },
    {
        "firstName": "Geralt",
        "lastName": "of Rivia",
        "email": "whitewolf@example.com",
    },
    {
        "firstName": "Pavlin",
        "lastName": "Petrov",
        "email": "ppetrov@example.com",
    }
];
let listMarkup = '';

list.addEventListener('click', event => {
	if (event.target.classList.contains('email')) {
        chrome.tabs.update({
            url: event.target.href
        });
	}
});

contacts.forEach(contact => {
    const { firstName, lastName, email } = contact;

    listMarkup += `
        <li>
            <div class="name">${firstName} ${lastName}</div>

            <a href="mailto:${email}" class="email" target="_self">${email}</a>
        </li>
    `;
});

list.innerHTML = listMarkup;