// const circle = document.querySelector('.circle')

// function toggleColor(){
//     circle.classList.toggle('white-circle')
// }

// circle.addEventListener('click',toggleColor);

// const circle = document.querySelector('.white-circle')
// let count = 0

// function toggleColor(){
//     circle.classList.toggle('white-circle')
//     count++
//     console.log(count)
//     if(count>9){
//         circle.removeEventListener('click',toggleColor)
//     }
// }

// circle.addEventListener('click',toggleColor)

const circle = document.querySelector('.circle')
let height = 0

function moveCircle(){
    height += 100
    circle.style.top = height + 'px'
    if(height > 600){
        circle.removeEventListener('click', moveCircle)
    }
}

circle.addEventListener('click', moveCircle)