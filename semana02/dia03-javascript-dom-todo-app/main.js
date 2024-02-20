console.log('Hola JS')
const taskAdd = document.querySelector('.task__add')
const taskInput = document.querySelector('.task__input')
// const taskInput = document.querySelector('#taskInput')
// const taskInput = document.getElementById('taskInput')
const taskList = document.querySelector('.task__list')

taskAdd.addEventListener('click', function(event) {
    // Se ejecutara cuando click en el botón "Añadir tarea"
    /*const button = document.createElement('button')
    button.textContent = 'Hola soy un bóton'
    document.body.appendChild(button)*/

    if(taskInput.value === '') {
        alert('El campo es requerido')
        return 
    }
    const li = document.createElement('li')

    //  TO DO: Añadir un checkbox y al hacerle click que tache solo el texto de la tarea con color rojo

    // <input type = "checkbox"/>
    const inputCheckbox = document.createElement('input')
    inputCheckbox.setAttribute('type', 'checkbox')
    li.appendChild(inputCheckbox)

    const span = document.createElement('span')
    span.textContent = taskInput.value
    li.appendChild(span)

    const button = document.createElement('button')
    button.textContent = 'Borrar'
    li.appendChild(button)

    taskList.appendChild(li)
    taskInput.value = ''

})

taskList.addEventListener('click', function(event) {

    const target = event.target // obtenemos el elemento presionado
    if(target.tagName === 'BUTTON') {
        target.parentElement.remove()
    }

    if(target.tagName === 'INPUT' && target.type === 'checkbox') {
        target.classList.toggle('completed')
    }
})
