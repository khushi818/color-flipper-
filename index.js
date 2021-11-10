const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const btn6 = document.querySelector(".btn6");
const col = document.querySelector(".color-text");
list_class = [];
btn1.addEventListener("click",function(e)
{
    e.preventDefault();
    // if(document.body.classList === null)
    // {
    // document.querySelector('body').classList.toggle('moonlight');
    // col.textContent= "Moonlight";
    // }
    // else{
        
    //     document.querySelector('body').classList.toggle('moonlight');
    //     col.textContent= "Moonlight";
    // }
    // document.body.classList.add('moonlight');
    if(document.body.classList !== null)
    {
    a=list_class.pop();
    document.body.classList.remove(a);
    }
    document.body.classList.add('moonlight');
    col.textContent= "Moonlight";
    list_class.push('moonlight')

});

btn2.addEventListener("click",function()
{
    if(document.body.classList !== null)
    {
    a=list_class.pop();
    document.body.classList.remove(a);
    }
    document.querySelector('body').classList.toggle('agressive');
    col.textContent= "Aggresive";
    list_class.push('agressive');
});

btn3.addEventListener("click",function()
{
    if(document.body.classList !== null)
    {
    a=list_class.pop();
    document.body.classList.remove(a);
    }
    document.querySelector('body').classList.add('darkme');
    col.textContent= "Darkme";
    list_class.push('darkme');
});

btn4.addEventListener("click",function()
{
    if(document.body.classList !== null)
    {
    a=list_class.pop();
    document.body.classList.remove(a);
    }
    document.querySelector('body').classList.toggle('brightme');
    col.textContent= "Brightme";
    list_class.push('brightme');
});

btn5.addEventListener("click",function()
{
    if(document.body.classList !== null)
    {
    a=list_class.pop();
    document.body.classList.remove(a);
    }
    document.querySelector('body').classList.toggle('lifetree');
    col.textContent= "Lifetree";
    list_class.push('lifetree');
});

btn6.addEventListener("click",function()
{
    if(document.body.classList !== null)
    {
    a=list_class.pop();
    document.body.classList.remove(a);
    }
    document.querySelector('body').classList.toggle('normal');
    col.textContent= "Normal";
    list_class.push('normal');
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

   
   if(document.body.classList !== null)
    {
    a=list_class.pop();
    document.body.classList.remove(a);
    }
    else if(document.body.style !==  null)
    {
       document.body.style.remove(backgroundColor);
    }
    col.textContent = code;
   document.body.style.backgroundColor= code;

 }
);

function randomnumber()
{
    return Math.floor(Math.random() * hex.length);
}