const inputBtn = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById('ul-el')

let myLeads = []

inputBtn.addEventListener('click', () => {
    myLeads.push(inputEl.value)
    renderLeads()
    
})

function renderLeads(){
    
    ulEl.innerHTML = ''
    
    for(let i = 0; i < myLeads.length; i++){
        ulEl.innerHTML += "<li>" + myLeads[i] + "</li>" 
        
    }
}
