const item = document.querySelector('.item')
const placeholders = document.querySelector('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders){
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}

function dragstart(event){
    event.target.classList.add('hold')
    setTimeout(() =>     event.target.classList.add('hide'), 0
    )
}
function dragend(event){
    event.target.className = 'item'

}
function dragover(event){
    console.log()

}
function dragenter(event){

}
function dragleave(event){

}

function dragdrop(event){

}