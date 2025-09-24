const inputBtn = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById('ul-el')
let listItems = ''

let myLeads = []

inputBtn.addEventListener('click', () => {
    myLeads.push(inputEl.value)
    renderLeads()
    
})

function renderLeads(){
    
    listItems = ''

    for(let i = 0; i < myLeads.length; i++){
        listItems += "<li>" + myLeads[i] + "</li>" 
        
    }

    ulEl.innerHTML = listItems
}
