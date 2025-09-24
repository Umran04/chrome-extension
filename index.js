const inputBtn = document.getElementById('input-btn')
const deleteBtn = document.getElementById('delete-btn')
const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById('ul-el')
let listItems = ''

let myLeads = []

const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads){
    
    listItems = ''

    for(let i = 0; i < leads.length; i++){
        
        listItems += 
        `<li>
            <a target='_blank' href=${leads[i]}>
                ${leads[i]}
            </a>
        </li>`

        
    }

    ulEl.innerHTML = listItems
}



inputBtn.addEventListener('click', () => {
    if(inputEl.value == ''){
        alert('enter a url')
    }else{
        myLeads.push(inputEl.value)
        inputEl.value = ''
        localStorage.setItem('myLeads', JSON.stringify(myLeads))
        render(myLeads)
    }
    
})


deleteBtn.addEventListener('dblclick', () => {
    localStorage.clear()
    myLeads = []
    render(myLeads)
    
})


