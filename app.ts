const toggleButton =document.getElementById('toggle_skill') as HTMLButtonElement
const skillSection = document.getElementById('skills') as HTMLElement
toggleButton.addEventListener('click', ()=>{
    if(skillSection.style.display === 'none') {
        skillSection.style.display = 'block'
    } else {
        skillSection.style.display = 'none'
    }
})

