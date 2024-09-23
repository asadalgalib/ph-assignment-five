// let's start

// for button

const sectionOne = document.getElementById('sec-one');
const sectionTwo = document.getElementById("sec-two");

document.getElementById("donate-btn").addEventListener('click', function () {
    sectionOne.classList.remove("hidden");
    sectionTwo.classList.add("hidden");
});
document.getElementById("history-btn").addEventListener('click', function () {
    sectionTwo.classList.remove("hidden");
    sectionOne.classList.add("hidden");
});

// card Noakhali

document.getElementById("btn-noakhali").addEventListener('click', function (event) {
    event.preventDefault();
    const myDonate = getInputValueById("input-noakhali");
    const myDonateNumber = parseFloat(myDonate);

    const myBalance = document.getElementById("account-balance").innerText;
    const collected = document.getElementById("noakhali-money").innerText;

    if (myDonateNumber > 0) {
        const myNewBalance = parseFloat(myBalance) - myDonateNumber;
        document.getElementById("account-balance").innerText = myNewBalance;

        const totalCollected = parseFloat(collected) + parseFloat(myDonate);
        document.getElementById("noakhali-money").innerText = totalCollected;
    }
    else{
        alert("Invalid input");
    }

})

// card feni 

document.getElementById("btn-feni").addEventListener('click', function (event) {
    event.preventDefault();
    const myDonate = getInputValueById("input-feni");
    const myDonateNumber = parseFloat(myDonate);

    const myBalance = document.getElementById("account-balance").innerText;
    const collected = document.getElementById("feni-money").innerText;

    if (myDonateNumber > 0) {
        const myNewBalance = parseFloat(myBalance) - myDonateNumber;
        document.getElementById("account-balance").innerText = myNewBalance;

        const totalCollected = parseFloat(collected) + parseFloat(myDonate);
        document.getElementById("feni-money").innerText = totalCollected;
    }
    else{
        alert("Invalid input");
    }
})

// card quota 

document.getElementById("btn-quota").addEventListener('click', function (event) {
    event.preventDefault();
    const myDonate = getInputValueById("input-quota");
    const myDonateNumber = parseFloat(myDonate);

    const myBalance = document.getElementById("account-balance").innerText;
    const collected = document.getElementById("quota-money").innerText;

    if (myDonateNumber > 0) {
        const myNewBalance = parseFloat(myBalance) - myDonateNumber;
        document.getElementById("account-balance").innerText = myNewBalance;

        const totalCollected = parseFloat(collected) + parseFloat(myDonate);
        document.getElementById("quota-money").innerText = totalCollected;
    }
    else{
        alert("Invalid input");
    }
})