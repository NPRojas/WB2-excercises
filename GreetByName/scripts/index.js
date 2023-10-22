window.onload = init;

function init () {
    btn1.onclick = btn1Clicked;
}

function btn1Clicked() {
    const nameInput = document.querySelector('#nameInput');
    const btn1 = document.querySelector('#btn1');

    let nameValue = nameInput.value;
    let message = `Hello ${nameValue}`;

    const outputH1 = document.querySelector('#outputH1');
    outputH1.textContent = message;

    alert(message);
}