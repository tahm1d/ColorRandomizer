const col = document.querySelector(".color");
const t = document.querySelector(".tag");
console.log(t);
console.log(col);

function change()
{
    return Math.floor(Math.random()*256);
}

col.addEventListener("click", function(){

    let value =  `${change()},${change()},${change()}`;
    col.style.background = `rgb(${value})`;
    t.innerHTML = `rgb(${value})`;
});
