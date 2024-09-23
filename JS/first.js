// let's start


const sectionOne = document.getElementById('sec-one');
const sectionTwo = document.getElementById("sec-two");

document.getElementById("donate-btn").addEventListener('click',function(){
   sectionOne.classList.remove("hidden");
   sectionTwo.classList.add("hidden");
})
document.getElementById("history-btn").addEventListener('click',function(){
   sectionTwo.classList.remove("hidden");
   sectionOne.classList.add("hidden");
})