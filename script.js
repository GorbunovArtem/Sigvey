var categories1 = document.getElementById("Гироскутеры");
var categories2 = document.getElementById("Электровелосипеды");
var categories3 = document.getElementById("Сигвеи");

function filter1(){
    categories1.style.display = "flex";
    categories2.style.display = "flex";
    categories3.style.display = "flex";
}
function filter2(){
    categories1.style.display = "flex";
    categories2.style.display = "none";
    categories3.style.display = "none";
}
function filter3(){
    categories1.style.display = "none";
    categories2.style.display = "flex";
    categories3.style.display = "none";
}
function filter4(){
    categories1.style.display = "none";
    categories2.style.display = "none";
    categories3.style.display = "flex";
}















/*const filterBox = document.querySelectorAll('.box');

document.querySelector('nav').addEventListener('click', (event) => {

    if(event.target.tagName !== 'li') return false;
    let filterClass = event.target.dataset['f'];

    filterBox.forEach(elem => {
        elem.classList.remove('hide');
        if(!ele)matchMedia.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('hide');
        }
    });
});*/