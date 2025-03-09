document.getElementById('button').addEventListener('click', AddToList)
document.getElementById('button2').addEventListener('click', clear)

function AddToList(){
    let li = (document.querySelector('input').value)
     let ul = document.getElementById('toDOList')
     let liElement = document.createElement('li');
     let textNode = document.createTextNode(li)
     liElement.appendChild(textNode)
     ul.appendChild(liElement)
}

function clear(){
    
}