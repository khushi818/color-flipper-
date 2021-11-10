const btn1 = document.querySelector(".moonlight");
const btn2 = document.querySelector(".agressive");
const btn3 = document.querySelector(".darkme");
const btn4 = document.querySelector(".brightme");
const btn5 = document.querySelector(".lifetree");
const btn6 = document.querySelector(".normal");
const col = document.querySelector(".color-text");
btn1.addEventListener("click",function(e)
{
    e.preventDefault();
    // document.body.style.backfaceVisibility = auto;
    document.querySelector('body').classList.toggle('moonlight');
    col.textContent= "Moonlight";
    
});

btn2.addEventListener("click",function(e)
{
    e.preventDefault();
    document.querySelector('body').classList.toggle('agressive');
    col.textContent= "Aggresive";
});

btn3.addEventListener("click",function(e)
{
    e.preventDefault();
    document.querySelector('body').classList.toggle('darkme');
    col.textContent= "Darkme";
});

btn4.addEventListener("click",function(e)
{
    e.preventDefault();
    document.querySelector('body').classList.toggle('brightme');
    col.textContent= "Brightme";
});

btn5.addEventListener("click",function(e)
{
    e.preventDefault();
    document.querySelector('body').classList.toggle('lifetree');
    col.textContent= "Lifetree";
});

btn6.addEventListener("click",function(e)
{
    e.preventDefault();
    document.querySelector('body').classList.toggle('normal');
    col.textContent= "Normal";
});

const hex = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];

random_btn = document.querySelector(".chooseme");

random_btn.addEventListener("click",(e) =>{
   e.preventDefault();
   let code ="#";
   for ( let i = 0 ; i < 6 ; i++)
   {
       code += hex[randomnumber()];
   }
   col.textContent = code;
   document.body.style.backgroundImage = 'none';
   document.body.style.backgroundColor= code;

}
);

function randomnumber()
{
    return Math.floor(Math.random() * hex.length);
}