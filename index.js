const  cont2= document.querySelector('.box2');
const r2 = document.querySelector('.custom-radio2');
const cont3=document.querySelector('.box3');
const r3 = document.querySelector('.custom-radio3');
const cont1=document.querySelector('.box');
const r1=document.querySelector('.custom-radio1');
r2.addEventListener('change', () => {
   
    if (r2.checked) {
        cont2.style.border = '0.904px solid #F88CA7';
        cont2.style.background = '#FFF4F7';
        cont3.style.border = '0.904px solid #C8C8C8';
        cont3.style.background = '#FFF';
        cont1.style.border = '0.904px solid #C8C8C8';
        cont1.style.background = '#FFF';
    } 
});
r3.addEventListener('change', () => {
   
    if (r3.checked) {
        cont3.style.border = '0.904px solid #F88CA7';
        cont3.style.background = '#FFF4F7';
        cont2.style.border = '0.904px solid #C8C8C8';
        cont2.style.background = '#FFF';
        cont1.style.border = '0.904px solid #C8C8C8';
        cont1.style.background = '#FFF';
    } 
});
r1.addEventListener('change', () => {
   
    if (r1.checked) {
        cont1.style.border = '0.904px solid #F88CA7';
        cont1.style.background = '#FFF4F7';
        cont2.style.border = '0.904px solid #C8C8C8';
        cont2.style.background = '#FFF';
        cont3.style.border = '0.904px solid #C8C8C8';
        cont3.style.background = '#FFF';
    } 
});
