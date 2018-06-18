const email = document.getElementById('email').value;
const logForm = document.forms[0];

const ihideit = document.getElementById('ihideit');
//const submitButton = document.getElementById('submitButton');
//submitButton.addEventListener('click', validity);

logForm.addEventListener('submit', submitValidity);
function submitValidity() {
    if(!email) {
        if(ihideit.className == 'hide') {
            ihideit.className = '';
            ihideit.innerHTML ='met imel ou enskri a';
            return false;
        }
    }
    return true;
}

/* function validity() {
    if(!email) {
        alert('met imel ou enskri a');
    }
} */