const container = document.querySelector('.container')
let numSquares = 32
let area = numSquares*numSquares
const gridSize = document.getElementById('gridSize')
let size = 512/(area/numSquares)
let color = document.getElementById('color')
let random = document.getElementById('random')
let erase = document.getElementById('erase')

function createGrid() {
for (let i = 0; i < area; i++) {
    const grid =  document.createElement('div')
    grid.setAttribute('class', "boxes")
    document.getElementById('trueContainer').appendChild(grid)
    grid.style.width = size + 'px'
    grid.style.height = size + 'px'
}
}
createGrid()

function hover() {
   const grid = document.getElementsByClassName('boxes')
   for (let n = 0; n < area; n++) {
       grid[n].addEventListener('mouseover', (e) => {
        grid[n].style.backgroundColor = 'black'
        }
       )
    
       
}
}
hover()

function clearAll() {
    const grid = document.getElementsByClassName('boxes')
    const clearAll = document.querySelector('button')
    for(let n = 0; n < area; n++)
    clearAll.addEventListener('mouseup', (e) => {
        grid[n].style.backgroundColor = 'white'
    })
}
clearAll()



function changeSize() {
    const grid = document.querySelectorAll('.boxes')
    for (let n = 0; n < area; n++) {
       grid.forEach(e => e.remove());
     }
     numSquares = prompt('Pick a grid size between 1-100')
     area = numSquares*numSquares
     size = 512/(area/numSquares)
     if (numSquares < 101 && numSquares > 0) {
     createGrid()
     hover()
     } else {
         alert('Error, number must be between 1 and 100')
     }
}


function changeColor() {
    const grid = document.getElementsByClassName('boxes')
    answer = prompt('Choose a color (be careful with spelling).')
    if (answer != null) {
        for (let n = 0; n < area; n++) {
         grid[n].addEventListener('mouseover', (e) => {
             grid[n].style.backgroundColor = answer
          }
         )
    }
} else {
    for (let n = 0; n < area; n++) {
        grid[n].addEventListener('mouseover', (e) => {
            grid[n].style.backgroundColor = 'black'
         }
        )
   }
    
}
}


function randomColor() {
    let rColor1 = Math.floor(Math.random()*256)
    let rColor2 = Math.floor(Math.random()*256)
    let rColor3 = Math.floor(Math.random()*256)
    const grid = document.getElementsByClassName('boxes')
    for (let n = 0; n < area; n++) {
        grid[n].addEventListener('mouseover', (e) => {
            grid[n].style.backgroundColor = `rgb(${rColor1}, ${rColor2}, ${rColor3})`
         }
        )
   }
}

function eraser() {
    const grid = document.getElementsByClassName('boxes')
    for (let n = 0; n < area; n++) {
        grid[n].addEventListener('mouseover', (e) => {
            grid[n].style.backgroundColor = 'white'
         }
        )
   }
}



gridSize.addEventListener('mouseup', (e) => {
    changeSize()
})
color.addEventListener('mouseup', (e) =>  {
    changeColor()
})
random.addEventListener('mouseup', (e) => {
    randomColor()
})
erase.addEventListener('mouseup', (e) => {
    eraser()
})