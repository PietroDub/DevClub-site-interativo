let list = document.querySelectorAll('.item')
let prev = document.querySelector('#prev')
let next = document.querySelector('#next')

let count = list.length // 3
let active = 0

function trade(){
    console.log("Avançou!")
    let activeOld = document.querySelector('.active')
    activeOld.classList.remove('active')

    
    //quando for maior que o valor final, reseta
    if(active >= count - 1){
        active = 0
    } else {
        active++
    }
        list[active].classList.add('active')
}

function back(){
    let activeOld = document.querySelector('.active')
    activeOld.classList.remove('active')

    if(active <= 0){
        active = list - 1
    } else {
        active--
    }

    list[active].classList.add('active')
}
