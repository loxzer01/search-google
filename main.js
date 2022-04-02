const $ = (element)=>document.querySelector(element);


function clickGoogle(){
    const form = $('form.form__search');
    if(window.matchMedia('(max-width:600px)').matches){
        form.style = 'justify-content:center;width:375px;padding:0 20px;gap:5px;';
        return;
    }
    form.style = 'justify-content:center;width:600px;padding:16px 30px;';
}

function clickBody(){
    const form = $('form.form__search');
    form.style = 'justify-content:space-between;width:80px; padding:16px;';
}
window.addEventListener('click',(e)=>{
    const element = e.target.className; 
    if(element==='body')clickBody();
    if(element==='logo__google')clickGoogle();
})

$('#form').addEventListener('submit',(e)=>{
    e.preventDefault()
    const data = Object.fromEntries( new FormData(e.target))
    window.location.href = 'https://www.google.com/search?q='+data.search;
})