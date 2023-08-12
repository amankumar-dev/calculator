const btn=document.querySelectorAll('.first');
let screen=document.querySelector('#screen');
const equal=document.querySelector('.equal');
btn.forEach((e)=>{
    e.addEventListener('click',()=>{
        if(e.innerText=='='){
            if(screen.value!==""){
                try{
                    screen.value=eval(screen.value);
                }catch(error){
                    alert('Invalid input');
                }
            }
            else{
                alert('Please enter arithmetic equation');
            }
        }
        else if(e.innerText=='AC'){
            screen.value="";
        }
        else if(e.innerText=='DE'){
            if(screen.value!==''){
                screen.value=screen.value.slice(0,-1);
            }
            else{
                alert('Please enter arithmetic equation');
            }
        }
        else{
            screen.value+=e.innerText;
        }
    })
})

// for theme
const moon=document.querySelector('#dark-moon');
const sun=document.querySelector('#sun');
const body=document.querySelector('body');
sun.addEventListener('click',()=>{
    body.classList.toggle('light-mode');
    sun.style.display='none';
    moon.style.display='block';
})
moon.addEventListener('click',()=>{
    body.classList.toggle('light-mode');
    sun.style.display='block';
    moon.style.display='none';
})