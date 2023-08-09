const container = document.querySelector('.container');
const buttonElement = document.createElement('button');
buttonElement.textContent = 'Ask Your Crush!';
buttonElement.addEventListener('click', function() {
    const userName = prompt("What's your name?")
    const crushName = prompt("What's your crush's name?");

    if (crushName !== null) { // If user clicks 'cancel'
        const confirmed = confirm(`Are you sure you want to ask ${crushName} to go out with you?`);
        let response = '';
        if (confirmed) {
            response = prompt(`${crushName}, will you go out with ${userName}? (Yes/No)`);
        }

        const instruction = confirm(`Please pass back to ${userName}`)

        const message = document.createElement('p');
        if (response !== null) {
            if (response.toLowerCase()==='yes') {
                message.textContent = `Congratulations! ${crushName} said yes! 🎉`;
            } else {
                message.textContent = `${crushName} said no. Better luck next time! 💔`;
            }
        }
        container.appendChild(message);
    }
});
    
container.appendChild(buttonElement);