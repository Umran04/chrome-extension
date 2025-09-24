const inputBtn = document.getElementById('input-btn')
const deleteBtn = document.getElementById('delete-btn')
const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById('ul-el')
let listItems = ''

let myLeads = []

const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads()
}



inputBtn.addEventListener('click', () => {
    if(inputEl.value == ''){
        alert('enter a url')
    }else{
        myLeads.push(inputEl.value)
        inputEl.value = ''
        localStorage.setItem('myLeads', JSON.stringify(myLeads))
        console.log(localStorage.getItem('myLeads'))
        renderLeads()
    }
    
})

deleteBtn.addEventListener('click', () =>{
    alert('DOUBLE CLICK TO DELETE')
})
deleteBtn.addEventListener('dblclick', () => {
    console.log('Delete btn works')
})

function renderLeads(){
    
    listItems = ''

    for(let i = 0; i < myLeads.length; i++){
        
        listItems += 
        `<li>
            <a target='_blank' href=${myLeads[i]}>
                ${myLeads[i]}
            </a>
        </li>`

        
    }

    ulEl.innerHTML = listItems
}
