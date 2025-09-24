const inputBtn = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById('ul-el')
let listItems = ''

let myLeads = []

inputBtn.addEventListener('click', () => {
    myLeads.push('https://' + inputEl.value)
    inputEl.value = ''
    renderLeads()
    
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
