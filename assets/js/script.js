/* VARIABLE BUTTON */
let button = document.getElementById('read_button')

/* EVENT BUTTON IF/ELSE */
button.addEventListener('click', function(){
    const card = document.querySelector('.card');
    card.classList.toggle('active');

    if(card.classList.contains('active')){
        return button.textContent = 'Read less'
    }else{
        return button.textContent = 'Read more'
    }
})