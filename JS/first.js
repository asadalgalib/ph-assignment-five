// let's start

// for button

const sectionOne = document.getElementById('sec-one');
const sectionTwo = document.getElementById("sec-two");

document.getElementById("donate-btn").addEventListener('click', function () {
    sectionOne.classList.remove("hidden");
    sectionTwo.classList.add("hidden");

    const foot = document.getElementById("fo");
    foot.classList.add("bg-[#F9F7F3]");
});
document.getElementById("history-btn").addEventListener('click', function () {
    sectionTwo.classList.remove("hidden");
    sectionOne.classList.add("hidden");

    const foot = document.getElementById("fo");
    foot.classList.remove("bg-[#F9F7F3]");
});
document.getElementById("blog-btn").addEventListener('click', function(){
    window.location.href = "/ph-assignment-five/blog.html";
})


// card Noakhali

document.getElementById("btn-noakhali").addEventListener('click', function (event) {
    event.preventDefault();
    // math
    const myDonate = getInputValueById("input-noakhali");
    const myDonateNumber = parseFloat(myDonate);

    const myBalance = document.getElementById("account-balance").innerText;
    const myBalanceNumber = parseFloat(myBalance);

    const collected = document.getElementById("noakhali-money").innerText;
    const collectedNumber = parseFloat(collected);

    if (myDonateNumber > 0 && myDonateNumber <= myBalanceNumber) {
        const myNewBalance = myBalanceNumber - myDonateNumber;
        document.getElementById("account-balance").innerText = myNewBalance;

        const totalCollected = collectedNumber + myDonateNumber;
        document.getElementById("noakhali-money").innerText = totalCollected;

        const modal = document.getElementById("myModal");
        modal.showModal();

        // history
        const div = document.createElement('div');
        div.classList.add("p-8", "border", "rounded-2xl");

        const h3 = document.createElement("h3");
        h3.classList.add("mb-4", "text-lg", "font-bold");
        h3.innerText = myDonateNumber + " Taka is Donated for famine-2024 at Noakhali, Bangladesh";

        const p = document.createElement("p");
        p.classList.add("text-base", "font-normal")
        p.innerText = "Date: " + new Date();

        div.appendChild(h3);
        div.appendChild(p)
        const parent = document.getElementById("parent-div");
        parent.appendChild(div);
    }
    else {
        alert("Invalid input");
    }
})

// card feni 

document.getElementById("btn-feni").addEventListener('click', function (event) {
    event.preventDefault();
    // math
    const myDonate = getInputValueById("input-feni");
    const myDonateNumber = parseFloat(myDonate);

    const myBalance = document.getElementById("account-balance").innerText;
    const myBalanceNumber = parseFloat(myBalance);

    const collected = document.getElementById("feni-money").innerText;
    const collectedNumber = parseFloat(collected);

    if (myDonateNumber > 0 && myDonateNumber <= myBalanceNumber) {
        const myNewBalance = myBalanceNumber - myDonateNumber;
        document.getElementById("account-balance").innerText = myNewBalance;

        const totalCollected = collectedNumber + myDonateNumber;
        document.getElementById("feni-money").innerText = totalCollected;

        const modal = document.getElementById("myModal");
        modal.showModal();

        // history
        const div = document.createElement('div');
        div.classList.add("p-8", "border", "rounded-2xl");

        const h3 = document.createElement("h3");
        h3.classList.add("mb-4", "text-lg", "font-bold");
        h3.innerText = myDonateNumber + " Taka is Donated for Flood Relief in Feni, Bangladesh";

        const p = document.createElement("p");
        p.classList.add("text-base", "font-normal")
        p.innerText = "Date: " + new Date();

        div.appendChild(h3);
        div.appendChild(p)
        const parent = document.getElementById("parent-div");
        parent.appendChild(div);
    }
    else {
        alert("Invalid input");
    }

})

// card quota 

document.getElementById("btn-quota").addEventListener('click', function (event) {
    event.preventDefault();
    // math
    const myDonate = getInputValueById("input-quota");
    const myDonateNumber = parseFloat(myDonate);

    const myBalance = document.getElementById("account-balance").innerText;
    const myBalanceNumber = parseFloat(myBalance);

    const collected = document.getElementById("quota-money").innerText;
    const collectedNumber = parseFloat(collected);

    if (myDonateNumber > 0 && myDonateNumber <= myBalanceNumber) {
        const myNewBalance = myBalanceNumber - myDonateNumber;
        document.getElementById("account-balance").innerText = myNewBalance;

        const totalCollected = collectedNumber + myDonateNumber;
        document.getElementById("quota-money").innerText = totalCollected;

        const modal = document.getElementById("myModal");
        modal.showModal();

        // history
        const div = document.createElement('div');
        div.classList.add("p-8", "border", "rounded-2xl");

        const h3 = document.createElement("h3");
        h3.classList.add("mb-4", "text-lg", "font-bold");
        h3.innerText = myDonateNumber + " Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh";

        const p = document.createElement("p");
        p.classList.add("text-base", "font-normal")
        p.innerText = "Date: " + new Date();

        div.appendChild(h3);
        div.appendChild(p)
        const parent = document.getElementById("parent-div");
        parent.appendChild(div);
    }
    else {
        alert("Invalid input");
    }
})