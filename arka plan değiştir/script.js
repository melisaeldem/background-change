const button = document.querySelector('button')
const body = document.body ;
const currentcolor = document.querySelector('.currentcolor')

function randomcolorgenrater(){
    const red = Math.floor(Math.random()*256)
    const green = Math.floor(Math.random()*256)
    const blue = Math.floor(Math.random()*256)
    const randomcolr=`rgb(${red},${green},${blue})`
    return randomcolr;

}
button.addEventListener("click",()=>{
const randomcolr =randomcolorgenrater();
body.style.backgroundColor = randomcolr;
currentcolor.textContent= randomcolr;

})












// const button = document.querySelector("button");
// const body = document.querySelector("body");
// const colors = ["black","green","pink","purple","blue","gray","violet","red","yellow"];


// button.addEventListener("click", changeBackground);

// function changeBackground(){
//     // Rastgele bir renk(
//     const rastgeleSayi = Math.floor(Math.random() * colors.length);
//     const secilenRenk =  colors[rastgeleSayi];
//     body.style.backgroundColor = secilenRenk;
    
// }
