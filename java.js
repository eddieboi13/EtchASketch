const container = document.querySelector('.container')
let numSquares = 32
let area = numSquares*numSquares
const gridSize = document.getElementById('gridSize')
let size = 512/(area/numSquares)


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
     createGrid()
     hover()
}
gridSize.addEventListener('mouseup', (e) => {
    changeSize()
})