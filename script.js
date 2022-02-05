const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const openModal = document.querySelectorAll('.show-modal')
const modal = document.querySelector('.modal')

/* Open Modal */
const removeHidden = function(){
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

for(let i = 0; i < openModal.length; i++){
    openModal[i].addEventListener('click', removeHidden)
}

/* Close Modal */
const addHidden = function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}
for(let i = 0; i < openModal.length; i++){
    closeModal.addEventListener('click', addHidden)
    overlay.addEventListener('click', addHidden);
    document.addEventListener('keydown', function(e){
        if(e.key === 'Escape' && !modal.classList.contains('hidden')){
            addHidden();
        }
    }
)}